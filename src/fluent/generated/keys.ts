import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4d488508da1a47d3ae2767773d0335d0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4e5447adc5eb46ed879d53953f2b94a5'
                    }
                }
            }
        }
    }
}
