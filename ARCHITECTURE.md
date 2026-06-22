# DW Chargeback — Architecture & CI/CD Pipeline

## Overview

DW Chargeback is a scoped ServiceNow application built using the **ServiceNow SDK (now-sdk) v4.7.2** with a modern **TypeScript-first development workflow**. The entire application is defined declaratively in fluent TypeScript files (`.now.ts`), compiled into ServiceNow XML metadata, and deployed to ServiceNow instances via GitHub Actions CI/CD.

---

## 1. Development Environment

```
┌──────────────────────────────────────────────────────────────┐
│                       Developer Workstation                  │
│                                                              │
│   VS Code ←→ opencode (AI agent)                             │
│       │                                                      │
│       └── Edits *.now.ts files in src/fluent/               │
│                                                              │
│   Terminal: now-sdk build  (local validation)                │
│   Terminal: now-sdk install (direct deploy to instance)      │
│                                                              │
│   Git: commit + push to GitHub                               │
└──────────────────────────────────────────────────────────────┘
```

### Key Tools

| Tool | Purpose |
|------|---------|
| **ServiceNow SDK** (`@servicenow/sdk`) | Compiles TypeScript fluent definitions into ServiceNow XML metadata. Handles package.xml generation, dependency resolution, and record ID generation. |
| **TypeScript** | Type-safe fluent API for defining tables, business rules, script includes, ACLs, UI actions, client scripts, REST APIs, roles, properties, and navigation. |
| **opencode** | AI coding agent in VS Code that understands the codebase and assists with development. |

### Fluent File Structure

The source code lives under `src/fluent/` and consists entirely of `.now.ts` files (note: SDK v4.7.2 only processes `*.now.ts`, not plain `.ts`):

```
src/fluent/
├── index.now.ts           — Application entry point, imports all modules
├── app.now.ts             — ApplicationMenu, Roles, Properties, CrossScopePrivileges, Navigation modules
├── tables/
│   ├── customer.now.ts    — x_snc_chargeback_customer table
│   ├── rate_card.now.ts   — x_snc_chargeback_rate_card table
│   ├── charge_model.now.ts
│   ├── license_type.now.ts
│   ├── license_allocation.now.ts
│   ├── chargeback_run.now.ts
│   ├── invoice_line.now.ts
│   └── onboarding_request.now.ts
├── business-rules.now.ts  — 5 business rules (before/after query, insert, update)
├── client-scripts.now.ts  — 4 client scripts (onChange, onSubmit, onLoad)
├── script-includes.now.ts — 5 script include definitions
├── scripts/               — Actual JavaScript implementation stubs for script includes
├── rest-apis.now.ts       — Chargeback REST API with 7 endpoints
├── ui-actions.now.ts      — 5 UI actions (Calculate, Approve, Reject, etc.)
└── generated/
    └── keys.ts            — Auto-generated key registry (created by build)
```

### Table Definitions

Each table is defined using the fluent SDK API. Example pattern:

```typescript
export const CustomerTable = Table({
  name: 'x_snc_chargeback_customer',
  label: 'Customer',
  columns: {
    company_name: StringColumn({ label: 'Company Name', mandatory: true, maxLength: 100 }),
    lob: ReferenceColumn({ label: 'LOB', referenceTable: 'x_snc_chargeback_lob' }),
    contract_start: DateColumn({ label: 'Contract Start' }),
    contract_end: DateColumn({ label: 'Contract End' }),
    email: EmailColumn({ label: 'Email' }),
    status: ChoiceColumn({ label: 'Status', choices: { active: 'Active', inactive: 'Inactive' } as const }),
    phone: StringColumn({ label: 'Phone', maxLength: 20 }),
  },
})
```

---

## 2. Build Process (now-sdk build)

```
  *.now.ts files
       │
       ▼
  ┌─────────────────────────────────┐
  │   now-sdk build                  │
  │                                 │
  │  1. Parse TypeScript files       │
  │  2. Resolve imports & $id refs  │
  │  3. Generate unique sys_ids     │
  │     for each $id                │
  │  4. Generate keys.ts registry   │
  │  5. Produce XML metadata:       │
  │     - sys_db_object (tables)    │
  │     - sys_dictionary (columns)  │
  │     - sys_script_include        │
  │     - sys_script (BR)           │
  │     - sys_ui_action             │
  │     - sys_client_script         │
  │     - sys_ws_definition (REST)  │
  │     - sys_user_role             │
  │     - sys_properties            │
  │     - sys_app_module (nav)      │
  │     - sys_scope (app manifest)  │
  │     - etc.                      │
  │                                 │
  │  6. Package into dist/app/      │
  │     ├── dictionary/  (columns)  │
  │     ├── scope/       (app+scope)│
  │     └── update/      (all XMLs) │
  └─────────────────────────────────┘
       │
       ▼
  dist/app/  (262 XML files for current app)
       │
       ▼
  zip -r target/chargeback_{version}.zip dist/app/
```

### Build Output Structure

```
dist/app/
├── dictionary/
│   ├── sys_dictionary_x_snc_chargeback_customer_company_name.xml
│   ├── sys_dictionary_x_snc_chargeback_customer_lob.xml
│   ├── sys_dictionary_x_snc_chargeback_rate_card_price.xml
│   └── ... (column + table definitions)
│
├── scope/
│   ├── sys_app_47e3cfc6...xml          (Application record)
│   ├── sys_app_application_47e3cfc6...xml
│   ├── sys_app_module_*.xml           (Navigation modules)
│   ├── sys_scope_47e3cfc6...xml       (Scope definition)
│   └── sys_scope_admin_47e3cfc6...xml
│
└── update/
    ├── sys_db_object_x_snc_chargeback_customer.xml
    ├── sys_script_include_chargeback_engine.xml
    ├── sys_script_validate_contract_dates.xml
    ├── sys_ws_definition_chargeback_api.xml
    ├── sys_ws_operation_*.xml         (REST endpoints)
    ├── sys_ui_action_calculate.xml
    ├── sys_user_role_*.xml
    └── ... (all individual record XMLs)

package_inventory.csv
```

### Key Build Features

| Feature | Description |
|---------|-------------|
| **$id System** | Every record has a `$id` (e.g. `'prop-default-currency'`). The build maps these to stable `sys_id` UUIDs and generates a `keys.ts` registry. |
| **Cross-module References** | `$id` values can reference each other (e.g. `ApplicationMenu` `$id` is referenced by navigation `Record` calls). |
| **Frozen Keys** | `--frozenKeys` flag validates that `$id` values in `keys.ts` haven't changed, preventing accidental sys_id regeneration between builds. |

---

## 3. CI/CD Pipeline

```
                    GitHub Repository
        github.com/jaramakrishnan/DW-Chargeback
                    │
        ┌───────────┴───────────┐
        │                       │
    Push to main            Push tag v*
        │                       │
        ▼                       ▼
  ┌──────────────┐      ┌──────────────┐
  │ Deploy to Dev │      │Publish Rel.  │
  │ (auto)        │      │+ QA Deploy   │
  │               │      │ (manual)     │
  │ now-sdk build │      │              │
  │ --frozenKeys  │      │ now-sdk build│
  │ now-sdk inst. │      │ now-sdk inst.│
  └───────┬───────┘      └──────┬───────┘
          │                     │
    basic auth             OAuth 2.0
          │                     │
          ▼                     ▼
  ┌──────────────┐      ┌──────────────┐
  │  DEV Instance │      │  QA Instance  │
  │  (0004)       │      │  (0005)       │
  │               │      │               │
  │ Scope: DW     │      │ Scope: DW     │
  │ Chargeback    │      │ Chargeback    │
  │ x_snc_charge  │      │ x_snc_charge  │
  │ _back         │      │ _back         │
  └──────────────┘      └──────────────┘
```

### Workflow 1: Deploy to Dev (`deploy.yml`)

**Trigger:** Every push to `main` branch.

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
  - run: npm ci
  - run: npx now-sdk build --frozenKeys
  - run: npx now-sdk install
    env:
      SN_SDK_NODE_ENV: SN_SDK_CI_INSTALL
      SN_SDK_AUTH_TYPE: basic
      SN_SDK_INSTANCE_URL: ${{ secrets.SN_INSTANCE_URL }}
      SN_SDK_USER: ${{ secrets.SN_USER }}
      SN_SDK_USER_PWD: ${{ secrets.SN_PASSWORD }}
```

**Authentication:** Basic auth (ServiceNow username + password stored in GitHub Secrets).

**Behavior:** Every commit to `main` immediately updates the Dev instance. This gives developers instant feedback — the Dev instance always reflects the latest code.

### Workflow 2: Deploy to QA (`deploy-qa.yml`)

**Trigger:** Manual via `workflow_dispatch` with a version tag input.

```yaml
steps:
  - uses: actions/checkout@v4
    with:
      ref: ${{ github.event.inputs.version }}  # Checkout specific tag
  - run: npm ci
  - run: npx now-sdk build
  - run: npx now-sdk install
    env:
      SN_SDK_AUTH_TYPE: oauth
      SN_SDK_INSTANCE_URL: ${{ secrets.SN_QA_URL }}
      SN_SDK_OAUTH_CLIENT_ID: ${{ secrets.SN_QA_CLIENT_ID }}
      SN_SDK_OAUTH_CLIENT_SECRET: ${{ secrets.SN_QA_CLIENT_SECRET }}
```

**Authentication:** OAuth 2.0 client_credentials grant type.

**OAuth Flow:**
1. GitHub Action sends `grant_type=client_credentials` + `client_id` + `client_secret` to `https://{instance}/oauth_token.do`
2. ServiceNow returns an access token
3. `now-sdk install` uses this Bearer token for all REST API calls

**Why tags for QA:** QA deployments should be deliberate, versioned, and traceable. Each QA deploy corresponds to a git tag (`v1.0.8`, `v1.0.9`, etc.), which creates an immutable snapshot in the git history.

### Workflow 3: Publish Release (`publish-release.yml`)

**Trigger:** Any push of a `v*` tag.

**Behavior:** Creates a GitHub Release with release notes, attaching the source code ZIP as an artifact. This provides an audit trail — you can always download exactly what was deployed.

---

## 4. Deployment Mechanism (now-sdk install)

The `now-sdk install` command:

1. **Reads** the `dist/app/` directory structure
2. **Uploads** each XML record via REST API to the target instance:

   ```
   POST /api/now/now-sdk/install
   Body: { "records": [...], "scope": "x_snc_chargeback", "scopeId": "47e3cfc6..." }
   ```

3. **Creates/Updates** records in the scoped application:
   - If a record with the same `sys_id` exists → updates it
   - If not → creates it
4. **Writes** the application version from `package.json` into `sys_app.version`
5. **Logs** a rollback context — if the install fails partway, it can roll back

### What gets installed per deploy

| Category | Count | ServiceNow Table |
|----------|-------|-----------------|
| Tables | 7 | `sys_db_object` |
| Columns | ~50+ | `sys_dictionary` |
| Script Includes | 5 | `sys_script_include` |
| Business Rules | 5 | `sys_script` |
| Client Scripts | 4 | `sys_client_script` |
| UI Actions | 5 | `sys_ui_action` |
| REST API | 1 (7 endpoints) | `sys_ws_definition`, `sys_ws_operation` |
| Roles | 4 | `sys_user_role` |
| Properties | 5 | `sys_properties` |
| Navigation Modules | 4 | `sys_app_module` |
| Application Menu | 1 | `sys_app_module` (SEPARATOR type) |
| Cross-Scope Privileges | 3 | `sys_scope_privilege` |
| Scheduled Script | 1 | `sysauto_script` |

---

## 5. Environment Matrix

| | **Dev** | **QA** |
|---|---|---|
| **Instance** | `jpm-wkshp-jun-7350-0004.lab.service-now.com` | `jpm-wkshp-jun-7350-0005.lab.service-now.com` |
| **Deploy trigger** | Auto on push to main | Manual via workflow_dispatch |
| **Auth method** | Basic Auth | OAuth 2.0 client_credentials |
| **Git ref** | main branch | Tag (v*) |
| **Build flags** | `--frozenKeys` | (none) |
| **Purpose** | Development & testing | Release validation |
| **Version tracking** | Set by `package.json` | Set by `package.json` |

---

## 6. SDK API Expectations (v4.7.2)

Key constraints encountered during development:

| Requirement | Details |
|-------------|---------|
| **File extension** | Only `*.now.ts` files are processed (not `*.ts`) |
| **$id required** | Must be present on most definition types: ScriptInclude, Acl, UiAction, Property, ApplicationMenu, ClientScript, BusinessRule, CrossScopePrivilege, RestApi, Route, ScheduledScript |
| **UiAction** | Use `name` instead of `label`; `showList` → `list.showButton`/`list.showContextMenu`; `onclick` → `client.onClick` |
| **RestApi** | Use `RestApi` + `serviceId` + `routes` instead of deprecated `ScriptedRestApi` |
| **BusinessRule scripts** | Must be string literals, not arrow functions (no TS arrow operators) |
| **PhoneColumn** | Removed — use `StringColumn` with `maxLength` instead |
| **Flows** | Use `Flow` import from `@servicenow/sdk/automation` (wfa.subflow syntax not supported in fluent) |
| **ScheduledScript** | No `description` field |

---

## 7. Data Flow Summary

```
Developer edits .now.ts in VS Code
        │
        ▼
now-sdk build (local) ──► validates TypeScript, generates XML
        │
        ▼
git commit + push ──► GitHub
        │
        ├── Push to main ──► Dev deploy (auto)
        │       │
        │       ▼
        │   GitHub Action:
        │   1. Checkout main
        │   2. npm ci
        │   3. now-sdk build --frozenKeys
        │   4. now-sdk install (basic auth)
        │       │
        │       ▼
        │   Dev ServiceNow instance updated
        │
        └── Push tag v* ──► GitHub Release (auto)
                │
                ▼
            Manual:
            gh workflow run "Deploy to QA" --ref v1.0.x
                │
                ▼
            GitHub Action:
            1. Checkout tag
            2. npm ci
            3. now-sdk build
            4. now-sdk install (OAuth)
                │
                ▼
            QA ServiceNow instance updated
```

---

## 8. Version Management

- **`package.json`** contains the definitive app version (e.g. `"version": "1.0.10"`)
- **Git tags** must match `package.json` version (e.g. `v1.0.10`)
- **Build process** bakes the version into `sys_app` XML metadata and the `bom.json`
- **Instance** displays the version in `sys_app` record and during application installation
- **Dev** is always on the latest main (continuous delivery)
- **QA** is pinned to specific tagged versions (release candidates)

---

## 9. Backup & Recovery

| Mechanism | What's Protected |
|-----------|-----------------|
| **GitHub Repository** | All source code — full git history with every commit |
| **GitHub Releases** | Immutable snapshots at each tagged version |
| **QA Instance** | The installed app itself serves as a deploy target for rollback (install previous tag) |
| **Dev Instance** | Latest development state — can be restored by re-running CI |
| **rollbackContext** | ServiceNow's built-in rollback on failed installs |

To roll back QA to a previous version:

```bash
gh workflow run "Deploy to QA" --ref v1.0.8 -f version=v1.0.8
```

This reinstalls the previous version, replacing all metadata with that tag's state.
