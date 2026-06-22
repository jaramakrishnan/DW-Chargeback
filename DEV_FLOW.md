# Dev Flow — Complete Detailed Breakdown

## Overview

This document explains the end-to-end flow of how a prompt typed in opencode becomes a deployed ServiceNow application on the Dev instance — no QA involved.

---

## PART 1: Local Development (on your Mac)

### Step 1.1: You type a prompt

In VS Code terminal, you type:
```
@opencode add a customer table
```

**What's happening:**
- You're talking to opencode — an AI agent running as a CLI inside VS Code
- No network calls, no authentication
- Think of this as you asking a developer sitting next to you to write some code

---

### Step 1.2: I (opencode) write the `.now.ts` file

I generate TypeScript code and save it to `src/fluent/tables/customer.now.ts`:

```typescript
import { Table, StringColumn, EmailColumn } from '@servicenow/sdk/core'

export const CustomerTable = Table({
  name: 'x_snc_chargeback_customer',
  label: 'Customer',
  columns: {
    name: StringColumn({ label: 'Name' }),
    email: EmailColumn({ label: 'Email' }),
  },
})
```

**What's happening:**
- I use the `write` tool — standard filesystem write on your Mac
- The file follows ServiceNow SDK's fluent API pattern
- `Table()`, `StringColumn()` are TypeScript functions defined in `@servicenow/sdk/core` (installed via npm)
- These are NOT raw XML — they are TypeScript that will later be compiled into XML
- **No network calls, no authentication**

---

### Step 1.3: I run `now-sdk build` locally

I execute:
```bash
npx now-sdk build
```

**What happens inside now-sdk build:**

1. **Reads configuration:**
   - `package.json` → finds `@servicenow/sdk` version 4.7.2
   - `now.config.json` → finds scope name (`x_snc_chargeback`), scope ID (`47e3cfc6...`), app name (`DW Chargeback`)

2. **Discovers files:**
   - Scans `src/fluent/` for all `*.now.ts` files (only `.now.ts` — plain `.ts` is ignored)

3. **TypeScript compilation:**
   - TypeScript compiler (`tsc`) parses the code
   - Validates types — catches errors like wrong parameter names, missing required fields
   - Resolves imports — follows your `import { Table } from '@servicenow/sdk/core'` to link to the SDK package

4. **Fluent → XML translation:**
   For each fluent definition (e.g. `Table({...})`), the SDK:
   - Reads the `$id` property (e.g. `'customer-table'`)
   - Generates a deterministic `sys_id` UUID = `SHA256(scopeId + $id)` → first 32 chars
   - Wraps the definition in appropriate ServiceNow XML:
     - `Table()` → `sys_db_object` XML
     - `StringColumn()` → `sys_dictionary` XML
     - `BusinessRule()` → `sys_script` XML
     - etc.

5. **Writes XML to disk:**
   ```
   dist/app/
   ├── dictionary/sys_dictionary_x_snc_chargeback_customer_name.xml
   ├── dictionary/sys_dictionary_x_snc_chargeback_customer_email.xml
   ├── dictionary/sys_db_object_x_snc_chargeback_customer.xml
   ├── scope/sys_scope_47e3cfc6...xml
   ├── scope/sys_app_47e3cfc6...xml
   └── update/... (individual record XMLs)
   ```

6. **Updates keys.ts:**
   Writes to `src/fluent/generated/keys.ts`:
   ```typescript
   export const CustomerTable = 'a1b2c3d4e5f6...' as const
   ```
   This maps every `$id` to its stable UUID. This file IS committed to git.

---

### Validation Purpose

| What if... | Local build catches it? | What happens |
|---|---|---|
| Typo in `StringColum` (wrong name) | ✅ Yes | TypeScript error — build fails immediately |
| Missing `$id` on a definition that requires it | ✅ Yes | SDK throws validation error |
| Wrong parameter type (e.g. string instead of number) | ✅ Yes | TypeScript type check fails |
| File named `.ts` instead of `.now.ts` | ✅ Yes | File is ignored — your definition doesn't appear in output |

If the build fails, I fix the error and retry before moving on. **No push happens until local build succeeds.**

**What's NOT happening:**
- No connection to ServiceNow
- No connection to GitHub
- No authentication of any kind
- No XML is sent anywhere — it's just sitting in `dist/` on your Mac

---

## PART 2: Git & GitHub

### Step 2.1: I run git commands

```bash
git add -A          # Stage ALL changed files
git commit -m "Add customer table"
git push            # Send to GitHub
```

**What `git add -A` does:**
- Scans the working directory for changes
- Stages both the new `.now.ts` file AND the updated `keys.ts` file
- Does NOT stage `dist/` — it's in `.gitignore`

**What `git commit` does:**
- Creates a snapshot of all staged files
- Stores it in your local `.git/` directory
- The commit has a unique SHA (e.g. `607a3ee`)

**What `git push` does:**

1. Git reads your remote config (stored in `.git/config`):
   ```
   [remote "origin"]
       url = https://github.com/jaramakrishnan/DW-Chargeback.git
   ```

2. Git determines which protocol to use:
   - If URL starts with `https://` → **HTTPS protocol**
   - If URL starts with `git@` → **SSH protocol**

3. **If using HTTPS:**
   - Git opens TCP connection to `github.com:443`
   - GitHub sends its SSL/TLS certificate
   - Git verifies the certificate against your system's CA store
   - Encrypted tunnel is established (TLS handshake)

4. **Authentication:**
   
   **Option A — Personal Access Token (PAT):**
   ```
   Git sends:
   Authorization: Basic base64("your_username:ghp_xxxxxxxxxxxxxxxxxxxx")
   ```
   The PAT is stored in macOS Keychain (or a git credential helper). 
   You created it once at: `GitHub.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens`
   
   **Option B — SSH Key:**
   ```
   Git signs the connection with ~/.ssh/id_ed25519
   GitHub verifies against the public key at: GitHub.com → Settings → SSH and GPG keys
   ```

5. **GitHub receives the push:**
   - Verifies the commit signature (if signed)
   - Checks repository write permissions
   - Accepts the data — updates the `main` branch pointer to the new commit SHA
   - **Records what was pushed:**
     ```
     Changed files:
       src/fluent/tables/customer.now.ts   (new — 45 lines)
       src/fluent/generated/keys.ts         (modified — 2 lines added)
     ```

**What's pushed to GitHub:**
- `.now.ts` source files ✅
- `keys.ts` (the $id → sys_id map) ✅
- `package.json`, `now.config.json` ✅
- `dist/` (XML files) ❌ — in `.gitignore`
- `node_modules/` ❌ — in `.gitignore`
- `target/` ❌ — in `.gitignore`

---

### Step 2.2: GitHub triggers the workflow

GitHub has a continuous watcher on all events in the repository. When a push event occurs:

1. GitHub checks the branch — it's `main`
2. GitHub reads `.github/workflows/deploy.yml`:
   ```yaml
   on:
     push:
       branches: [main]
   ```
3. The push event matches the trigger condition → GitHub creates a **workflow run**
4. The run URL: `https://github.com/jaramakrishnan/DW-Chargeback/actions/runs/{run_id}`

**What GitHub provisions:**
- A fresh Ubuntu Linux virtual machine (GitHub-hosted runner)
- 2 CPU cores, 7 GB RAM, 14 GB SSD
- Pre-installed software: Node.js 20, npm, Git, curl, etc.
- The runner exists ONLY for the duration of this run (typically 1-3 minutes)
- After the run completes, the VM is destroyed — nothing persists

**Authentication:** The runner is given a temporary `GITHUB_TOKEN` — a short-lived token (expires at end of run) with read access to the repository.

---

## PART 3: GitHub Actions Runner

### Step 3.1: Checkout code

```yaml
- uses: actions/checkout@v4
```

**What happens on the runner:**

1. The runner uses its `GITHUB_TOKEN` to authenticate to GitHub's API
2. It downloads the repository ZIP at the exact commit SHA that triggered the run
3. Extracts it to `/home/runner/work/Chargeback/Chargeback/`
4. Now the runner has the same files you committed — `.now.ts`, `keys.ts`, `package.json`, etc.

**Connection:** Runner → GitHub API (HTTPS, port 443)
**Auth:** GITHUB_TOKEN (auto-generated, read-only, run-scoped)

---

### Step 3.2: Install npm dependencies

```yaml
- run: npm ci
```

**What happens:**

1. `npm ci` reads `package-lock.json` (or `package.json`)
2. Sees `"@servicenow/sdk": "4.7.2"` in `devDependencies`
3. Connects to `registry.npmjs.org` (HTTPS, port 443)
4. Downloads the package tarball: `@servicenow/sdk-4.7.2.tgz`
5. Also downloads dependencies of the SDK (TypeScript, etc.)
6. Extracts everything into `node_modules/`
7. The `now-sdk` binary is now at `node_modules/.bin/now-sdk`

**Connection:** Runner → npm public registry (HTTPS, port 443)
**Auth:** None — public packages

---

### Step 3.3: Build with frozen keys

```yaml
- run: npx now-sdk build --frozenKeys
```

**What `npx` does:**
- Looks for `now-sdk` in `node_modules/.bin/`
- If found → runs it
- If not found → downloads from npm (not needed here since `npm ci` already installed it)

**What `--frozenKeys` does (compared to local build without it):**

| | Local build | Runner build |
|---|---|---|
| Flag | (none) | `--frozenKeys` |
| Reads keys.ts? | No — regenerates it | Yes — validates existing keys |
| Can it change keys.ts? | Yes — adds new mappings | No — fails if an existing $id changes |
| Purpose | Development — add new stuff freely | Deployment — ensure stability |

**What the runner build produces:**
```
dist/app/
├── dictionary/  (column XMLs)
├── scope/       (app + scope XMLs)
└── update/      (all record XMLs)
Total: ~262 XML files
```

Same as local, but validated against frozen keys.

**Connection:** None — purely local on the runner
**Auth:** None

---

### Step 3.4: Install to Dev — THE KEY MOMENT

```yaml
- run: npx now-sdk install
  env:
    SN_SDK_NODE_ENV: SN_SDK_CI_INSTALL
    SN_SDK_AUTH_TYPE: basic
    SN_SDK_INSTANCE_URL: ${{ secrets.SN_INSTANCE_URL }}
    SN_SDK_USER: ${{ secrets.SN_USER }}
    SN_SDK_USER_PWD: ${{ secrets.SN_PASSWORD }}
```

**Where do the secrets come from?**

`${{ secrets.SN_INSTANCE_URL }}` is GitHub's syntax for retrieving a **Repository Secret**.

At runtime, GitHub:
1. Reads the encrypted secret from its secure storage (AES-256 encrypted at rest)
2. The secret was stored by you or an admin at: `Settings → Secrets and variables → Actions → Repository secrets`
3. Decrypts it in-memory (never written to disk)
4. Injects it as an environment variable into the runner process
5. GitHub's log system automatically masks the value — if the runner tries to print it, it shows as `***`

**The secrets you set up:**

| Secret Name | Value (example) | What it's for |
|---|---|---|
| `SN_INSTANCE_URL` | `https://jpm-wkshp-jun-7350-0004.lab.service-now.com` | Where to upload the app |
| `SN_USER` | `F759840` | ServiceNow username with admin/creator rights |
| `SN_PASSWORD` | `DontTellThisPassw0rd!` | That user's password |

**What now-sdk install does with these env vars:**

```
now-sdk install reads:
  SN_SDK_INSTANCE_URL  = https://jpm-wkshp-jun-7350-0004.lab.service-now.com
  SN_SDK_AUTH_TYPE     = basic
  SN_SDK_USER          = F759840
  SN_SDK_USER_PWD      = DontTellThisPassw0rd!
```

**Step A — Construct the Basic Auth header:**

The HTTP Basic Authentication standard (RFC 7617) works like this:

```
Credentials = F759840:DontTellThisPassw0rd!
Base64 encoded = Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==

Header:
  Authorization: Basic Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==
```

**Why Base64 is NOT encryption:**
- Anyone with the Base64 string can decode it instantly using `echo Rjc1...== | base64 -d`
- The security comes from **HTTPS/TLS**, not from Base64
- TLS encrypts the entire HTTP request including headers, so the Authorization header is encrypted in transit

**Step B — now-sdk calls ServiceNow's installation API:**

```
POST https://jpm-wkshp-jun-7350-0004.lab.service-now.com/api/now/now-sdk/install
Headers:
  Authorization: Basic Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==
  Content-Type: application/json
  Accept: application/json

Body:
{
  "scope": "x_snc_chargeback",
  "scopeId": "47e3cfc639194d919e4bb3087f79778f",
  "records": [
    {
      "table": "sys_db_object",
      "data": {
        "name": "x_snc_chargeback_customer",
        "label": "Customer",
        "sys_scope": "47e3cfc6..."
      }
    },
    {
      "table": "sys_dictionary",
      "data": {
        "name": "name",
        "type": "string",
        ...
      }
    },
    // ... 260+ more records
  ]
}
```

**Step C — ServiceNow processes the request:**

1. Receives HTTPS request on port 443
2. Decrypts TLS → gets raw HTTP with Authorization header
3. Decodes Base64 → extracts `F759840:DontTellThisPassw0rd!`
4. Validates against ServiceNow's user table (`sys_user`):
   - Does user `F759840` exist?
   - Is the account active and not locked?
   - Does the password hash match?
5. If valid → checks if user has `admin` or `x_snc_chargeback.admin` role
6. If authorized → processes the records:
   - For each record's `sys_id`:
     - If exists → UPDATE
     - If not → INSERT
   - All linked to the scoped application `x_snc_chargeback`
7. Writes the app version from `package.json` into `sys_app.version`
8. Logs the installation in `sys_install_history`

**Step D — now-sdk reads the response:**

```json
{
  "result": {
    "status": "success",
    "records_processed": 262,
    "records_inserted": 15,
    "records_updated": 247,
    "version": "1.0.10"
  }
}
```

If the HTTP response code is 200 → the runner exits with code 0 → workflow is **green** (success).

If the response is 401 (unauthorized) or 500 (server error) → the runner exits with non-zero → workflow is **red** (failure).

---

### Step 3.5: Runner finishes

The VM is destroyed. All temporary files (`dist/app/`, `node_modules/`, even the checked-out code) are gone.

**Nothing persists on the runner** — it's a stateless disposable machine.

---

## PART 4: You verify on Dev instance

You open your browser and navigate to:
```
https://jpm-wkshp-jun-7350-0004.lab.service-now.com/nav_to.do?uri=%2Fsys_app.do%3Fsys_id%3D47e3cfc639194d919e4bb3087f79778f%26
```

**Authentication:** Your browser session — you logged in with your own ServiceNow username and password. This is separate from the machine-to-machine auth the runner used.

You see the customer table, its columns, and any other metadata from your prompt — now live on the Dev instance.

---

## VISUAL SUMMARY — THE COMPLETE DEV PATH

```
YOUR ACTION                    WHAT HAPPENS                          AUTH METHOD
════════════════════════════   ═══════════════════════════════════   ════════════════

1. You type:                   opencode interprets intent            None
   "add customer table"        and writes .now.ts file

2. I run:                      now-sdk reads .now.ts →               None (local)
   now-sdk build               generates XML in dist/app/
                               updates keys.ts

3. I run:                      git stages .now.ts + keys.ts          None (local)
   git add + commit            (skips dist/ via .gitignore)
   
4. I run:                      SSH/HTTPS to github.com               SSH key
   git push                    sends source files only               or PAT

5. GitHub detects              Creates Actions runner                GITHUB_TOKEN
   push to main                with Ubuntu VM                        (auto)

6. Runner checks out           Downloads source from GitHub          GITHUB_TOKEN
   code                        at the push SHA

7. Runner runs:                Downloads @servicenow/sdk             None (public)
   npm ci                      from npm registry                     

8. Runner runs:                Reads source .now.ts                  None (local)
   now-sdk build               Validates frozen keys                 
   --frozenKeys                Generates XML in dist/app/            

9. Runner runs:                Reads env vars from GitHub Secrets:   
   now-sdk install              SN_SDK_INSTANCE_URL  ─┐              BASIC AUTH
                                SN_SDK_USER          ─┤  →  Base64  user:pass
                                SN_SDK_USER_PWD      ─┘     →  Header
                                                                    
                               HTTPS POST to:
                               /api/now/now-sdk/install             
                               Auth: Basic base64(user:pass)         

10. ServiceNow                 User exists? Active? Correct          ServiceNow
    Dev instance               password? Has admin role?             user database
                               → YES → Create/Update records         
                               → NO  → 401 Unauthorized             

11. You open browser           Login with your own session           Browser cookie
    → Dev instance             See the customer table on Dev         (separate auth)
```

---

## WHERE AUTHENTICATION HAPPENS — VISUAL

```
Local machine                           GitHub                           ServiceNow Dev
═══════════════                        ════════                        ═══════════════

opencode → writes file ──┐
                         ▼
git add/commit/push ──────► SSH key or PAT ──► GitHub accepts push
                             │
                             ▼
                             GitHub creates runner ──► GITHUB_TOKEN
                                                          │
                                                          ▼
                                                          runner checks out code
                                                          runner runs npm ci
                                                          runner runs now-sdk build
                                                          runner runs now-sdk install
                                                              │
                                                              ▼
                                                          Reads GitHub Secrets:
                                                          SN_USER, SN_PASSWORD
                                                              │
                                                              ▼
                                                          Constructs Basic Auth:
                                                          "Basic " + Base64(user:pass)
                                                              │
                                                              ▼
                                                          HTTPS POST ──────────────────► ServiceNow verifies
                                                          Authorization: Basic ...        user + password
                                                                                          ↓
                                                                                    Installs app
                                                                                          ↓
                                                          Response: 200 OK ◄──────────── Success
```

---

## KEY FILES INVOLVED

| File | Pushed to git? | Purpose |
|---|---|---|
| `src/fluent/tables/customer.now.ts` | ✅ Yes | Source code — the TypeScript fluent definition |
| `src/fluent/generated/keys.ts` | ✅ Yes | Maps every `$id` to its stable `sys_id` UUID |
| `package.json` | ✅ Yes | Contains `@servicenow/sdk` version, app version |
| `now.config.json` | ✅ Yes | Scope name, scope ID, app name |
| `.github/workflows/deploy.yml` | ✅ Yes | The Dev CI/CD pipeline definition |
| `dist/app/*.xml` | ❌ No (gitignored) | Generated XML — never committed |
| `node_modules/` | ❌ No (gitignored) | Installed packages — regenerated via `npm ci` |

---

## IF SOMETHING GOES WRONG

| Failure | Where it's caught | Error message | Fix |
|---|---|---|---|
| TypeScript error (wrong API) | Local build (step 1.3) | `Type 'X' is not assignable to type 'Y'` | Fix the code |
| Missing `$id` | Local build (step 1.3) | `$id is required for this definition` | Add `$id` property |
| `--frozenKeys` mismatch | Runner build (step 3.3) | `Key mismatch for $id 'customer-table'` | Regenerate keys.ts |
| Bad GitHub PAT | Git push (step 2.1) | `HTTP 403: Permission denied` | Update PAT in Keychain |
| Wrong ServiceNow password | Runner install (step 3.4) | `HTTP 401: Unauthorized` | Update GitHub Secret `SN_PASSWORD` |
| User missing admin role | Runner install (step 3.4) | `User does not have sufficient roles` | Add admin role to user on Dev |
| Network timeout | Any HTTPS step | `Connection refused / timeout` | Check instance URL, firewall, VPN |

---

## CHEAT SHEET — KEY CONCEPTS (with detailed explanations)

---

### 1. Fluent API

**One-line definition:** TypeScript functions like `Table()`, `BusinessRule()` that look clean and readable — instead of writing raw XML.

**Detailed explanation:**

The ServiceNow SDK provides a set of TypeScript functions that let you define ServiceNow metadata using natural, readable code instead of raw XML. Each function corresponds to a ServiceNow record type:

| Fluent function | Generates XML for | ServiceNow table |
|---|---|---|
| `Table({...})` | Table definition | `sys_db_object` |
| `StringColumn({...})` | String field | `sys_dictionary` |
| `ReferenceColumn({...})` | Reference field | `sys_dictionary` |
| `ChoiceColumn({...})` | Choice field | `sys_dictionary` + `sys_choice` |
| `BusinessRule({...})` | Business rule | `sys_script` |
| `ScriptInclude({...})` | Script include | `sys_script_include` |
| `ClientScript({...})` | Client script | `sys_client_script` |
| `Acl({...})` | Access control rule | `sys_security_acl` |
| `UiAction({...})` | UI action (button) | `sys_ui_action` |
| `RestApi({...})` | REST API endpoint | `sys_ws_definition` |
| `Role({...})` | Application role | `sys_user_role` |
| `Property({...})` | System property | `sys_properties` |
| `ApplicationMenu({...})` | Application navigator menu | `sys_app_module` |
| `CrossScopePrivilege({...})` | Cross-scope privilege | `sys_scope_privilege` |
| `ScheduledScript({...})` | Scheduled job | `sysauto_script` |
| `Record({...})` | Any arbitrary table record | Any table |

**Why it's called "Fluent":**

The API is designed to be read like English sentences:

```typescript
// Fluent style — reads naturally
Table({
  name: 'x_snc_chargeback_customer',
  label: 'Customer',
  columns: {
    email: EmailColumn({ label: 'Email', mandatory: true }),
  },
})
```

versus the equivalent raw XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<record_update table="sys_db_object">
  <sys_db_object action="INSERT_OR_UPDATE">
    <name>x_snc_chargeback_customer</name>
    <label>Customer</label>
    <sys_scope>47e3cfc639194d919e4bb3087f79778f</sys_scope>
  </sys_db_object>
</record_update>
```

**Benefits of Fluent API over raw XML:**
- **Type safety** — TypeScript catches typos (e.g. `mandetory` instead of `mandatory`) at build time
- **Auto-completion** — VS Code suggests valid properties for each function
- **Less code** — A table with 10 columns takes ~30 lines in fluent vs ~200 lines in XML
- **Imports & reuse** — You can import definitions across files, share column patterns
- **Validation** — The SDK validates business logic (e.g. ensures `$id` is present where required)

---

### 2. `*.now.ts` file extension

**One-line definition:** The specific file extension that the now-sdk build process looks for. Plain `.ts` files are completely ignored.

**Detailed explanation:**

When you run `now-sdk build`, it scans your `src/fluent/` directory for files. It uses a file pattern filter:

```
Scanner looks for:  **/*.now.ts
Scanner ignores:    **/*.ts  (unless it's *.now.ts)
```

This means:
- `src/fluent/app.now.ts` ✅ — Found and compiled
- `src/fluent/tables/customer.now.ts` ✅ — Found and compiled
- `src/fluent/helpers.ts` ❌ — Completely ignored, even if it contains valid SDK code
- `src/fluent/old-file.ts` ❌ — Ignored

**Why does this distinction exist?**

The SDK team designed it this way to allow:
1. **Utility files** — You can have plain `.ts` files with helper functions, constants, or types that don't generate ServiceNow records. These are imported by `.now.ts` files but never compiled into XML themselves.
2. **Selective compilation** — If you rename a file from `.now.ts` to `.ts`, it stops being deployed. This is useful for disabling definitions without deleting them.
3. **Clear intent** — The `.now.ts` extension tells other developers "this file generates ServiceNow metadata."

**What happened when we got this wrong:**

Earlier in this project, all files were named `.ts` (not `.now.ts`). The build appeared to succeed but produced **zero XML files** — because it found no `*.now.ts` files to compile. The app deployed to QA with empty metadata. Fixing the extension from `.ts` to `.now.ts` across 24 files immediately produced 262 XML files.

---

### 3. `$id` (Dollar-id)

**One-line definition:** A stable human-readable identifier you assign to every SDK definition. The SDK converts it into a deterministic `sys_id` (UUID) for ServiceNow.

**Detailed explanation:**

Every definition in the fluent API needs a unique identifier so the SDK can:
1. Generate a stable `sys_id` for the ServiceNow record
2. Allow cross-references between definitions (e.g. a BusinessRule referencing a table)
3. Ensure the same definition always produces the same `sys_id` across builds

**How $id looks in code:**

```typescript
BusinessRule({
  $id: 'br-validate-contract-dates',   // ← This is the $id
  name: 'Validate Customer Contract Dates',
  table: 'x_snc_chargeback_customer',
  script: '...',
})
```

**How $id becomes sys_id:**

The SDK uses a deterministic UUID generation algorithm:

```
sys_id = SHA256(scopeId + ":" + $id)

Example:
  scopeId = 47e3cfc639194d919e4bb3087f79778f
  $id     = br-validate-contract-dates
  
  input   = "47e3cfc639194d919e4bb3087f79778f:br-validate-contract-dates"
  SHA256  = b8a7f3c2d1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9
  
  sys_id  = first 32 chars = b8a7f3c2d1e4f5a6b7c8d9e0f1a2b3c4
```

This means:
- Same scope + same $id **always** = same sys_id
- Different scope + same $id = different sys_id (no collisions between apps)
- Changing the $id = new sys_id (new record in ServiceNow — old record stays orphaned)

**Why $id matters:**

| Scenario | With $id | Without $id |
|---|---|---|
| First build | Creates record with sys_id = `b8a7f3c2...` | SDK auto-generates random sys_id |
| Second build (same code) | Same sys_id → UPDATES the same record | Different random sys_id → CREATES a duplicate |
| Rename the business rule | Same $id → same sys_id → updates in place | Different sys_id → old rule stays, new rule created |

**$id rules we discovered the hard way (SDK v4.7.2):**

The following definition types **require** `$id`:
- `ScriptInclude`
- `Acl`
- `UiAction`
- `Property`
- `ApplicationMenu`
- `ClientScript`
- `BusinessRule`
- `CrossScopePrivilege`
- `RestApi`
- `Route`
- `ScheduledScript`

Missing `$id` on any of these → build fails with error.

---

### 4. `keys.ts` (Auto-generated key registry)

**One-line definition:** An auto-generated TypeScript file that stores the mapping from every `$id` to its computed `sys_id`. It is committed to git.

**Detailed explanation:**

After every successful `now-sdk build`, the SDK writes to `src/fluent/generated/keys.ts`. This file looks like:

```typescript
// Auto-generated file. Do not edit manually.
export const appMenu = '47e3cfc639194d919e4bb3087f79778f' as const
export const modCustomers = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6' as const
export const customerTable = 'b8a7f3c2d1e4f5a6b7c8d9e0f1a2b3c4' as const
export const brValidateContractDates = 'c9b8a7f3c2d1e4f5a6b7c8d9e0f1a2b3' as const
```

**What it contains:**
- Each `$id` becomes a named export
- The value is the 32-character hex `sys_id`
- The `as const` assertion tells TypeScript these are literal values, not strings

**Why keys.ts exists:**

1. **`--frozenKeys` validation** — On subsequent builds with the `--frozenKeys` flag, the SDK reads `keys.ts` and compares every `$id` against its stored `sys_id`. If any mapping changed, the build fails. This prevents accidental ID regeneration.

2. **Cross-file references** — Other `.now.ts` files can import keys.ts to reference records by their stable sys_id:
   ```typescript
   import { customerTable } from '../generated/keys'
   
   BusinessRule({
     table: customerTable,  // Uses the sys_id of the customer table
     ...
   })
   ```

3. **Audit trail** — You can see in git history exactly when each record's sys_id was established and if it ever changed.

**What happens without keys.ts:**
- First build without frozen keys: `keys.ts` is created fresh
- Second build with frozen keys: reads `keys.ts`, validates, succeeds
- If `keys.ts` is deleted or out of date: `--frozenKeys` build will fail with `Key mismatch` errors

---

### 5. `--frozenKeys` flag

**One-line definition:** A build flag that prevents existing `$id` values from changing their `sys_id` mapping — ensures stable record IDs across deployments.

**Detailed explanation:**

**Without `--frozenKeys`:**
```
Build reads .now.ts files
  → generates sys_id for each $id (or re-generates if code changed)
  → writes/overwrites keys.ts
  → produces XML with those sys_ids
```

Every build **regenerates** `keys.ts` from scratch. If there's any difference in how the SDK computes IDs (e.g. version update, algorithm change), old IDs could be replaced with new ones.

**With `--frozenKeys`:**
```
Build reads .now.ts files
  → reads existing keys.ts
  → for each $id in .now.ts:
    if $id exists in keys.ts:
      use the existing sys_id (throw error if mismatch)
    if $id is NEW (not in keys.ts):
      generate new sys_id and add to keys.ts
  → produces XML
  → fails if any existing $id mapping changed
```

**What frozen keys protects against:**

| Scenario | Without --frozenKeys | With --frozenKeys |
|---|---|---|
| You add a new table | Gets a new sys_id ✅ | Gets a new sys_id ✅ |
| You rename a $id from 'table-a' to 'table-b' | Old record orphaned, new one created ⚠️ | Same behavior (ID changed) ⚠️ |
| SDK version upgrade changes hash algorithm | ALL sys_ids regenerate — all records become duplicates 🚨 | Build fails — you're warned before anything bad happens ✅ |
| You accidentally delete and re-add a definition | Gets a new sys_id — duplicate created 🚨 | Build fails — you catch the mistake ✅ |
| Team member changes someone else's $id | Silent overwrite 🚨 | Build fails — you review the change ✅ |

**Why we use --frozenKeys on Dev but not QA:**

Dev is continuously deployed (every push to main). Without frozen keys, a simple commit could accidentally regenerate all sys_ids, creating hundreds of duplicate records on Dev. Frozen keys keep Dev stable.

QA is deployed from tags — immutable snapshots. The source won't change between builds, so frozen keys don't add value.

---

### 6. GitHub Secrets

**One-line definition:** GitHub's encrypted storage for sensitive values like passwords and API keys. They are injected as environment variables into the runner at runtime.

**Detailed explanation:**

**Where they live:**

```
GitHub.com → Your Repository → Settings → Secrets and variables → Actions → Repository secrets
```

URL: `https://github.com/jaramakrishnan/DW-Chargeback/settings/secrets/actions`

**How they're stored:**
- Encrypted at rest using **libsodium sealed box** (AES-256-GCM)
- GitHub's infrastructure manages the encryption keys — even GitHub employees cannot decrypt them
- They are stored in GitHub's database, separate from the repository data

**How they're retrieved at runtime:**

```
GitHub Actions Workflow
  │
  ├── YAML references: ${{ secrets.SN_PASSWORD }}
  │
  ▼
GitHub Actions service:
  ┌─────────────────────────────────────────────┐
  │ 1. Fetch encrypted secret from secure store │
  │ 2. Decrypt using libsodium                  │
  │ 3. Inject as environment variable:          │
  │    SN_SDK_USER_PWD=<decrypted_value>        │
  │ 4. Mask value in logs (shows as ***)       │
  └─────────────────────────────────────────────┘
```

**Security guarantees:**
- Secrets are **never written to disk** on the runner
- Secrets are **never visible in logs** (GitHub automatically masks them)
- Secrets are **not available to forked repositories** (if your repo is forked, the fork can't access them)
- Secrets can be **rotated** (updated) anytime from the Settings page
- Secrets can be **scoped** to specific environments or branches

**Our Dev secrets:**

| Secret Name | What it holds | Used by |
|---|---|---|
| `SN_INSTANCE_URL` | Dev instance URL | `SN_SDK_INSTANCE_URL` env var |
| `SN_USER` | ServiceNow username | `SN_SDK_USER` env var |
| `SN_PASSWORD` | ServiceNow password | `SN_SDK_USER_PWD` env var |

**What NOT to store in secrets:**
- SSH keys (use Deploy Keys instead)
- GitHub PATs (use `secrets.GITHUB_TOKEN` instead — auto-generated)
- Large files (secrets have a 48KB limit)

---

### 7. Basic Auth (Basic Authentication)

**One-line definition:** An HTTP authentication method where the client sends username:password as a Base64-encoded string in the `Authorization` header.

**Detailed explanation:**

**The HTTP standard (RFC 7617):**

Basic Authentication is the simplest HTTP authentication mechanism. It works like this:

```
Step 1: Combine username and password with a colon
        → "F759840:DontTellThisPassw0rd!"

Step 2: Encode as Base64
        → "Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ=="

Step 3: Prefix with "Basic " and set as Authorization header
        → Authorization: Basic Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==
```

**How the wire format looks (TLS-decrypted):**

```
POST /api/now/now-sdk/install HTTP/1.1
Host: jpm-wkshp-jun-7350-0004.lab.service-now.com
Authorization: Basic Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==
Content-Type: application/json
Accept: application/json
Connection: close

{ "records": [...] }
```

**Security — The critical point:**

Base64 is **NOT encryption**. It is encoding — like Morse code or binary-to-text. Anyone who sees the Base64 string can decode it instantly:

```bash
echo "Rjc1OTg0MDpEb250ZWxsVGhpc1Bhc3N3MHJkIQ==" | base64 -d
# Output: F759840:DontTellThisPassw0rd!
```

**The actual security comes from TLS (HTTPS):**

```
Without TLS:
  Your network → [ PLAINTEXT: Authorization: Basic Rjc1... ] → ServiceNow
                ↑ Anyone on Wi-Fi, ISP, router can see this ↑

With TLS:
  Your network → [ 🔒 ENCRYPTED 🔒 ] → ServiceNow decrypts
                ↑ Nobody can read the header ↑
```

The TLS handshake:
1. Your client connects to ServiceNow on port 443
2. ServiceNow presents its SSL certificate (signed by a trusted CA)
3. Your client verifies the certificate
4. Both sides agree on a symmetric encryption key (using Diffie-Hellman key exchange)
5. All subsequent HTTP data (including the Authorization header) is encrypted with this key
6. Anyone intercepting the network traffic sees only encrypted gibberish

**Why Basic Auth works for Dev but not for production:**
- **Simple to set up** — just username + password, no OAuth configuration needed
- **No token expiration** — but this also means the password is sent on every request
- **User-dependent** — if the ServiceNow user is disabled, deployments stop working
- **Password rotation** — you must update the GitHub Secret every time the password changes
- QA uses OAuth instead (see separate doc) because OAuth doesn't expose a long-lived password

---

### 8. Bearer Token (Reference — used for QA, not Dev)

**One-line definition:** A short-lived token (typically a JWT) sent in the `Authorization: Bearer` header. Used by QA's OAuth flow instead of sending a password.

**Detailed explanation:**

**How it differs from Basic Auth:**

| Aspect | Basic Auth | Bearer Token |
|---|---|---|
| What's sent | Username + password (Base64) | A temporary token string |
| Credential exposure | Password on every request | Token only (can be short-lived) |
| Expiration | Never (until password changes) | Typically 1 hour |
| Revocation | Change the password | Token expires automatically |
| Creation | User account exists | OAuth client registered in ServiceNow |

**What a Bearer token looks like:**

```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6InhzbmNfY2hhcmdlYmFjayJ9.abc123def456
```

This is a **JWT (JSON Web Token)** — three Base64-encoded segments separated by dots:
1. **Header** — token type (JWT) and signing algorithm (HS256)
2. **Payload** — claims like scope, expiration time, client ID
3. **Signature** — cryptographic signature to verify the token wasn't tampered with

**How the QA flow uses Bearer tokens (preview):**

```
now-sdk install
  → sends client_id + client_secret to ServiceNow's /oauth_token.do
  → ServiceNow returns a Bearer token (JWT, valid 1 hour)
  → now-sdk sends the token in Authorization: Bearer <token>
  → ServiceNow validates the JWT signature and expiry
  → If valid → processes the install
  → If expired (after 1 hour) → now-sdk requests a new one
```

---

### 9. GITHUB_TOKEN

**One-line definition:** A temporary, auto-generated token that GitHub creates for every workflow run. It allows the runner to access the repository during that run.

**Detailed explanation:**

**How it's created:**

Every time a workflow run starts, GitHub automatically:
1. Creates a unique GITHUB_TOKEN
2. Sets it as the `$GITHUB_TOKEN` environment variable in the runner
3. Sets it as `${{ secrets.GITHUB_TOKEN }}` for use in YAML

**What GITHUB_TOKEN can do:**

The token has **read access** to the current repository by default. It can:
- ✅ Checkout the repository code
- ✅ Read repository metadata
- ✅ List workflows and runs
- ✅ Download release assets

It cannot:
- ❌ Write to the repository (unless you grant write permissions in the workflow YAML)
- ❌ Access other repositories
- ❌ Access GitHub settings or billing

**How it differs from a PAT:**

| | GITHUB_TOKEN | PAT |
|---|---|---|
| Created by | GitHub automatically | You manually |
| Lifespan | Duration of the workflow run (1-3 min) | Until you revoke it |
| Scope | Current repository only | Any repos you grant |
| Storage | Auto-injected, no setup needed | Must store in GitHub Secrets |
| Rotation | Automatic — new one every run | Manual |

**How the runner uses GITHUB_TOKEN:**

```yaml
- uses: actions/checkout@v4
  # Internally uses GITHUB_TOKEN to clone the repo
  # Equivalent to:
  # git clone https://x-access-token:$GITHUB_TOKEN@github.com/jaramakrishnan/DW-Chargeback.git
```

---

### 10. PAT (Personal Access Token)

**One-line definition:** A long-lived token you create in your GitHub account settings. Used for Git operations from your local machine (git push, gh CLI).

**Detailed explanation:**

**How to create one:**
1. Go to `GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)`
2. Click "Generate new token"
3. Select scopes: at minimum `repo` (full control of private repositories)
4. Give it a name (e.g. "DW Chargeback Dev Machine")
5. Copy the generated token (starts with `ghp_`)

**How it's used on your machine:**

**Option A — HTTPS with git-credential-osxkeychain:**
The first time you git push with HTTPS, git asks for username and password. Enter your GitHub username and the PAT (as the password). macOS Keychain saves it. Subsequent pushes use the saved PAT automatically.

**Option B — SSH key (alternative):**
Instead of PAT, you can generate an SSH key pair:
```bash
ssh-keygen -t ed25519 -C "your@email.com"
# Adds to ~/.ssh/id_ed25519
```
Then add `~/.ssh/id_ed25519.pub` to `GitHub.com → Settings → SSH and GPG keys → New SSH key`.

**How the PAT flows during `git push`:**

```
git push origin main
  │
  ▼
Git reads remote URL from .git/config:
  url = https://github.com/jaramakrishnan/DW-Chargeback.git
  │
  ▼
Git connects to github.com:443
  │
  ▼
GitHub asks: "Who are you?"
  │
  ▼
Git reads credentials from:
  → macOS Keychain (if stored there)
  → ~/.git-credentials (if using git-credential-store)
  → Or prompts you for username/token
  │
  ▼
Git sends:
  Authorization: Basic base64("your_github_username:ghp_xxxxxxxxxxxx")
  │
  ▼
GitHub decodes → extracts PAT → validates PAT is:
  - Not expired
  - Has "repo" scope
  - Not revoked
  → If valid: "Push accepted"
  → If invalid: "HTTP 403: Permission denied"
```

**Why we need PAT (or SSH key) for git but GITHUB_TOKEN for the runner:**

| Context | What authenticates to GitHub | Used for |
|---|---|---|
| Your machine (git push) | PAT or SSH key | Pushing code to GitHub |
| GitHub Actions runner | GITHUB_TOKEN | Checking out code from GitHub |

They serve the same purpose (prove identity to GitHub) but in different contexts — your machine's long-lived credential vs the runner's temporary credential.
