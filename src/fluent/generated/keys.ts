import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'acl-api-chargeback': {
                        table: 'sys_security_acl'
                        id: '891134743c4744db85dbb3372b7cdfd3'
                    }
                    'acl-cbrun-create': {
                        table: 'sys_security_acl'
                        id: '4272d1b2a09c49df89adb730a667247d'
                    }
                    'acl-cbrun-delete': {
                        table: 'sys_security_acl'
                        id: 'c7585b3f3b9c4513a9e652233058e4d1'
                    }
                    'acl-cbrun-read': {
                        table: 'sys_security_acl'
                        id: '1de017fb68124d88b116ae43fcb302f2'
                    }
                    'acl-cbrun-write': {
                        table: 'sys_security_acl'
                        id: 'ed6aba3e473b4780898509c6f7b3c010'
                    }
                    'acl-customer-create': {
                        table: 'sys_security_acl'
                        id: '01d372a5db584d1d88041b3924a2f2be'
                    }
                    'acl-customer-delete': {
                        table: 'sys_security_acl'
                        id: '2ac8f8942f8948a8a6c285969207aea9'
                    }
                    'acl-customer-read': {
                        table: 'sys_security_acl'
                        id: '574094e38abc453f9eeba7da6c2ea5f9'
                    }
                    'acl-customer-write': {
                        table: 'sys_security_acl'
                        id: '4fda71d8fcae4331ad63078f919545d3'
                    }
                    'acl-invline-create': {
                        table: 'sys_security_acl'
                        id: '59ac97c2865c41de8c31f5baadc7f251'
                    }
                    'acl-invline-delete': {
                        table: 'sys_security_acl'
                        id: '7fa6591465cc4afcae99f1429d4c2600'
                    }
                    'acl-invline-read': {
                        table: 'sys_security_acl'
                        id: 'f752dab3efb24fb6af9a8eb0ebe6be44'
                    }
                    'acl-invline-write': {
                        table: 'sys_security_acl'
                        id: '5500ab0cd1c44a5fb6ab353f67cf9aa3'
                    }
                    'acl-licalloc-create': {
                        table: 'sys_security_acl'
                        id: 'e056a58010e34284840ea3b8a5649092'
                    }
                    'acl-licalloc-delete': {
                        table: 'sys_security_acl'
                        id: '28a57a88a8514df499fca4c5755d8ff1'
                    }
                    'acl-licalloc-read': {
                        table: 'sys_security_acl'
                        id: '44fe2040daf4428d9ff50c3672cea627'
                    }
                    'acl-licalloc-write': {
                        table: 'sys_security_acl'
                        id: 'fed00fe71adb468dbdba8561f7c4d7b5'
                    }
                    'acl-lictype-create': {
                        table: 'sys_security_acl'
                        id: 'a644802c21424c1f873326c025e8d5ce'
                    }
                    'acl-lictype-delete': {
                        table: 'sys_security_acl'
                        id: 'd1338836603e4a0dad0acf2cca7afa4c'
                    }
                    'acl-lictype-read': {
                        table: 'sys_security_acl'
                        id: '3b446d609b2645ce843ba1502d032e24'
                    }
                    'acl-lictype-write': {
                        table: 'sys_security_acl'
                        id: '421bc1ef21124f34a9e08cc318b7050d'
                    }
                    'acl-onboard-create': {
                        table: 'sys_security_acl'
                        id: '1a53bab0a71c48f2ad3d9823bd827ebc'
                    }
                    'acl-onboard-delete': {
                        table: 'sys_security_acl'
                        id: '68dc692cbab240b08118221138455324'
                    }
                    'acl-onboard-read': {
                        table: 'sys_security_acl'
                        id: 'd9ddd705eb4941208c3b8c52fb1df37b'
                    }
                    'acl-onboard-write': {
                        table: 'sys_security_acl'
                        id: '61a9ebce18304d9992bf5a64f8397618'
                    }
                    'acl-ratecard-create': {
                        table: 'sys_security_acl'
                        id: '851e2f70033a47f89df1004eea43c9fd'
                    }
                    'acl-ratecard-delete': {
                        table: 'sys_security_acl'
                        id: 'e89c1cdb492e4b1a97d12edf9d2e6645'
                    }
                    'acl-ratecard-read': {
                        table: 'sys_security_acl'
                        id: '244b9652a2f342848c162bcf9cfe7ca6'
                    }
                    'acl-ratecard-write': {
                        table: 'sys_security_acl'
                        id: '1807ae55586548c3b4518aad601da1aa'
                    }
                    'api-chargeback': {
                        table: 'sys_ws_definition'
                        id: '6d7c30f727094e5bab596e7d2ba8e97c'
                    }
                    'app-menu': {
                        table: 'sys_app_application'
                        id: '198084268b67441ab57019d9fa9c757c'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4d488508da1a47d3ae2767773d0335d0'
                    }
                    'br-calc-invoice-totals': {
                        table: 'sys_script'
                        id: '7b82fb7f75994f9c977c2eff9463c7bc'
                    }
                    'br-lock-invoiced-run': {
                        table: 'sys_script'
                        id: '5c32d76342924e7c965f286493768ad9'
                    }
                    'br-validate-contract-dates': {
                        table: 'sys_script'
                        id: '6c20f9f658f946b19854cd8ed8089e99'
                    }
                    'br-validate-license-allocation': {
                        table: 'sys_script'
                        id: 'de58a87b12e643549fd5375ea43709b3'
                    }
                    'br-validate-rate-price': {
                        table: 'sys_script'
                        id: '4b4f9de366a649c980c8b5328792c6e0'
                    }
                    'cs-autoname-ratecard': {
                        table: 'sys_script_client'
                        id: '61673c5c08004d5c85586b2a37e2ce72'
                    }
                    'cs-confirm-status': {
                        table: 'sys_script_client'
                        id: 'f5532bd9dabf4f35afe068a2cb871a39'
                    }
                    'cs-validate-alloc': {
                        table: 'sys_script_client'
                        id: '062476ab0ef5421995cc765ec15f180f'
                    }
                    'cs-validate-email': {
                        table: 'sys_script_client'
                        id: 'a0a61e158e5048758224979f05121199'
                    }
                    'csp-sys-choice': {
                        table: 'sys_scope_privilege'
                        id: '1579009caca94b4eae44c5db473fa19a'
                    }
                    'csp-sys-group': {
                        table: 'sys_scope_privilege'
                        id: '5586c1be39ef4c7fad4707f7f8b1020a'
                    }
                    'csp-sys-user': {
                        table: 'sys_scope_privilege'
                        id: '6007baa665a54b50bbefd3e4134bf933'
                    }
                    'mod-chargeback-runs': {
                        table: 'sys_app_module'
                        id: 'bd1b1ac54e3d4d6f9a2736746c66588e'
                    }
                    'mod-customers': {
                        table: 'sys_app_module'
                        id: 'fa863e76d54d4f6faa028023be433295'
                    }
                    'mod-invoices': {
                        table: 'sys_app_module'
                        id: '8adecbdd2bf646d39a191efd34ab51b2'
                    }
                    'mod-license-allocations': {
                        table: 'sys_app_module'
                        id: 'defa69ecc6a74fc09823f7b0c0a43f0d'
                    }
                    'mod-license-types': {
                        table: 'sys_app_module'
                        id: 'ca62a892781440159f19dbbbd623da28'
                    }
                    'mod-onboarding': {
                        table: 'sys_app_module'
                        id: '8965fa995dc24f6c8a09f96cd2c4cc1b'
                    }
                    'mod-rate-cards': {
                        table: 'sys_app_module'
                        id: 'e69d062b7c8f4dfaa52298f252939bee'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '4e5447adc5eb46ed879d53953f2b94a5'
                    }
                    'prop-billing-cycle': {
                        table: 'sys_properties'
                        id: '40f95218db60404294c07573eb69f72e'
                    }
                    'prop-default-currency': {
                        table: 'sys_properties'
                        id: '5a3c241e41d0447d9edf85c12651a783'
                    }
                    'prop-grace-period': {
                        table: 'sys_properties'
                        id: '4a6cead96c314321b55454a349ddf472'
                    }
                    'prop-min-commit': {
                        table: 'sys_properties'
                        id: '0267ab71e1594aa7be72c0fa9e0080ba'
                    }
                    'prop-notif-email': {
                        table: 'sys_properties'
                        id: '93bfe0e155bd4f1196bcdde86e8debbc'
                    }
                    'route-calculate': {
                        table: 'sys_ws_operation'
                        id: '46d3efb60c23445191afc5c25e7ff3cf'
                    }
                    'route-gen-invoices': {
                        table: 'sys_ws_operation'
                        id: '70e19154896e458fb7b49b5677f2f09f'
                    }
                    'route-get-allocations': {
                        table: 'sys_ws_operation'
                        id: 'e7ebdda6b87e4aefb2ed78bff059f3ec'
                    }
                    'route-get-invoices': {
                        table: 'sys_ws_operation'
                        id: '783f9aa305414f81b382b4650d6bfb87'
                    }
                    'route-get-rates': {
                        table: 'sys_ws_operation'
                        id: '3b7189a2623f472dbf78b36add959d14'
                    }
                    'route-set-rate': {
                        table: 'sys_ws_operation'
                        id: '29cae53ce4114ddc8d42ec709e6ac91b'
                    }
                    'route-validate-onboard': {
                        table: 'sys_ws_operation'
                        id: '5722ad3ee52d42c5b749924260817f8f'
                    }
                    'si-chargeback-engine': {
                        table: 'sys_script_include'
                        id: '0a233a97de0945268de7a9382108fcae'
                    }
                    'si-invoice-service': {
                        table: 'sys_script_include'
                        id: 'f0a2ed89fd9c4dbd9e596c7f88cad586'
                    }
                    'si-licalloc-service': {
                        table: 'sys_script_include'
                        id: '0f7c62f0c06b42fb94d0ca0d6e54f83b'
                    }
                    'si-onboarding-service': {
                        table: 'sys_script_include'
                        id: '486ce463987b4103a08ae5e6886a924b'
                    }
                    'si-ratecard-service': {
                        table: 'sys_script_include'
                        id: '2291eac6d304413b988a8d69941a4009'
                    }
                    'ss-monthly-cbrun': {
                        table: 'sysauto_script'
                        id: 'e15911d4ab714c0e8585cc4be1285e2d'
                    }
                    'ua-approve-onboard': {
                        table: 'sys_ui_action'
                        id: 'c09cc087aa634179892a23d6eb506333'
                    }
                    'ua-calc-chargeback': {
                        table: 'sys_ui_action'
                        id: '3929881e37fa4ed8a91c9d92d215ee4b'
                    }
                    'ua-gen-invoices': {
                        table: 'sys_ui_action'
                        id: '1ce927525b014beda610a5f71f475314'
                    }
                    'ua-reject-onboard': {
                        table: 'sys_ui_action'
                        id: '40cbacef0b6748f18dcff2e83a4b11ba'
                    }
                    'ua-submit-review': {
                        table: 'sys_ui_action'
                        id: '72cce0367f1a4be680c8fda3e5e8524d'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00bb6599ab9648fdafdb6666e30be118'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0161bae6d5cf4d4cabadd37b62a3a694'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            value: 'calculated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '019de4a1c5bd48f2b47d120fbc708ed5'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocated_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01e1fd3e9afa43fcb89375661e2cad97'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'industry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03da1336b8e24a4494cdffc531cc8a43'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'discount_amount'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '03dfdb144a394fecbe1abec0743fdb7b'
                        key: {
                            sys_security_acl: '4fda71d8fcae4331ad63078f919545d3'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0403ca90be934bbea659712d32bdbba5'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05664e8f4ab9490085a8482aa32ac7b3'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '061a282db535475ba2462a52024e36e4'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'itsm_pro'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '068aafcee86e46a5b3a3c1149c71da97'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0849f8f9756345fc8cd011d49a0692ca'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contact_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08a36210a7074948938813c7e003f078'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0968ea1f6d524cfc892ab047809fbad7'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'used_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a09731611a54acf84bb83f8a8b4e759'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'discount_percent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b3f8b956eae41f0b5c75d5503515353'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c42254e15814a8fa65e001bd1119d8a'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c807bf887d94137a7e37aeeb6406efb'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'requested_licenses'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e7a9873f2fe4bdf929ff1f869a1d7a1'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0e937e86acfc4781846419debf27306d'
                        key: {
                            sys_security_acl: '61a9ebce18304d9992bf5a64f8397618'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f0ccb57844a47b1ad22492e22492ea8'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fd5dd41905740d08b0ccde7fce6f0d7'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'invoice_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1003ed47e86840baa23e9a951b3be54b'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '111a145eec874fe287381c03d01a16f0'
                        key: {
                            sys_security_acl: '1a53bab0a71c48f2ad3d9823bd827ebc'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '12e162f28cdd4ee4a901d9f56df380ce'
                        key: {
                            sys_security_acl: '244b9652a2f342848c162bcf9cfe7ca6'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '130ca790265a46f4807159ad452eca56'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'rejection_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14dd5cd91b2448a7951e35c8df21e332'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'discount_percent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '1677efac1002438199daaa66137292a3'
                        key: {
                            sys_ui_action: '40cbacef0b6748f18dcff2e83a4b11ba'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '16876987431d4ee4856c4e435a5997d0'
                        key: {
                            sys_security_acl: 'e89c1cdb492e4b1a97d12edf9d2e6645'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '17637fb1e94544b9acd9b54b02132967'
                        key: {
                            sys_security_acl: '44fe2040daf4428d9ff50c3672cea627'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18813c3b6a2944bab75a3027becef8f2'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'chargeback_run'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b114c9ae6ab4557813e2e709f118dcb'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'is_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c2bccfcca934fc9ad8017083e0d10b2'
                        key: {
                            sys_security_acl: '1de017fb68124d88b116ae43fcb302f2'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c62b1d9b1fa4bb48889d5cacc7974b7'
                        key: {
                            sys_security_acl: 'f752dab3efb24fb6af9a8eb0ebe6be44'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cce86696dfb48fb85fc56785b210f62'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'billing_period_end'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d1c7b2aab9c41a398c32d92f20dc832'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d1fd65cee6f4855be87b94fb5eb33a2'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                            value: 'suspended'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e2b12930c064921b2cc32ab00e16406'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e63c326603c49e683f87804ea05d2b1'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'customer_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e8b2dad6b404162916da5c342c2be48'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                            value: 'monthly'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2076591fe26f4e129985fb8d7ff16086'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '207704cd4d00482499746361d2b9fbf3'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'license_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '23440838b42a42aeb80d9898545893dd'
                        key: {
                            sys_security_acl: '244b9652a2f342848c162bcf9cfe7ca6'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2461155a5e7c4c6e8107b650bb5265c7'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '253d00ee8ca7415280a4eef7cb7d3bb8'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '258233e42a2345d1b6b721254dd8941a'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'is_default'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '267b7eae18b94445a3772f6042f0d12d'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'customer_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26e8e19173874c0a9007f68b43a9f7e7'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '277ed8edc1254d7b954b0b161b74363d'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28006411285d42e995f2948d4cdeb33d'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'line_total'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28e69ebe99084db48774fcc7e8a562e5'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'customer_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b44b92963c347438a00da6be94ee3f7'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2be16287ecb7422dadbbe28e485ef179'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2ce3cc1adf134dfc8dee1996f35b7ead'
                        key: {
                            sys_security_acl: '574094e38abc453f9eeba7da6c2ea5f9'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e2840bd2391413d8689f9929b6c9b57'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contact_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f678b7284e948fe95ca75a971ad798d'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'is_default'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f77587ec7aa43458edb907230c3e1bc'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contact_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2fafdab9f2184da6bd84feb027d26012'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'industry'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31af34c4265a4ac597017f0f40fca1d4'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocated_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3298c8bf0e1b413da6571e0b5c7d0c94'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'is_tax_exempt'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '350b2fdbafed421783cd448c88755db1'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'effective_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3624329c861d48d8aaf66deb376507c0'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '365bdf2d17de4fce85a9b6bd2f14ddd3'
                        key: {
                            sys_security_acl: 'fed00fe71adb468dbdba8561f7c4d7b5'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '372a28c384cf495eb1908bd560cf82fb'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'primary_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '386cfd28f3764919a8e98da7d1c387c4'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3894bc338390409e835a4334f734cadd'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '392a018ca3b84262bd1ea0f0dbe7f522'
                        key: {
                            name: 'x_snc_chargeback_customer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '395c859faffa40de8122bc872dfb41ce'
                        key: {
                            sys_security_acl: '01d372a5db584d1d88041b3924a2f2be'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39e1b2323279429fa734a05645d71931'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contract_term_months'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b940d6f1b4c4358a5bc486381ab95cc'
                        key: {
                            sys_security_acl: '244b9652a2f342848c162bcf9cfe7ca6'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d2da60242824efb99a00a2c8b61dc2c'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3d8910962d19472b9c91867b77d364eb'
                        key: {
                            sys_security_acl: '421bc1ef21124f34a9e08cc318b7050d'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3da2fdabbe884a0a9309c4d61baf9097'
                        key: {
                            sys_security_acl: '574094e38abc453f9eeba7da6c2ea5f9'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3dbdf57b22014dbca23f9d9f9de7b3d3'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e3e502f759f4e0bb563860b58dad6bc'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contact_name'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '3fa715c444e54eb8a94f20e071e3c391'
                        key: {
                            sys_ui_action: '72cce0367f1a4be680c8fda3e5e8524d'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '4001b36024f542e8841baaf78582c591'
                        key: {
                            sys_ui_action: 'c09cc087aa634179892a23d6eb506333'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '411e7638be9647f78cc9625e3b48165a'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '41232deb49f94b87bfb62d94f877cbb5'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'custom'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '420e2eec46f44880a5e49e6df3924288'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43a5a0eb47094312b9c08fbbdf7eaebc'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contact_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44b20f7561b24406a296fe515c8adcd1'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'discount_percent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45e7b30c80f547219937cebebeea182a'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'total_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '462291dd84f441d18fd8746f2b0a1ed0'
                        key: {
                            sys_security_acl: 'a644802c21424c1f873326c025e8d5ce'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '468ba7b535974c0dbbced996ea23120f'
                        key: {
                            sys_security_acl: '2ac8f8942f8948a8a6c285969207aea9'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4893f24f41a4443285554ef88e906989'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a56eedc0faf459a8144745a7ee7bcb4'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b5845ab4c1e4d7caabaa77afa9c5457'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'unit_price'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ba41335a4964af9846333061775dbc3'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'max_allocations'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4bd495ccb7ed4788ac7bca575f64b649'
                        key: {
                            sys_security_acl: '3b446d609b2645ce843ba1502d032e24'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4caf6a731d4b4da58eba12488a480fb4'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'itsm'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e5566c61d9b49a480d53c12ea61236b'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'customer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ecf4759390743ab9597629d9467836c'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5028dffcef6748239c5331f5735c9e16'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '508b698d7efc4b6994bd2b39ea203672'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53094ef036304893a82d475350a54f4f'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                            value: 'one_time'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5324524cb8ad4573a5c98694483249f3'
                        key: {
                            sys_ui_action: '3929881e37fa4ed8a91c9d92d215ee4b'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54309a768ceb4ed48149f30d133bd46e'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'customer_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54ec781f7ed24e9d8c902c7877f9a25e'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '561dc7d20efd427c8d40586e4233cfda'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contract_start_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '567b89fb10ad4e4993a49736dd60e951'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '56f46d19047f47c281031d87ada02588'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '57246e6fb9854f3d8e2958821ae06a62'
                        key: {
                            name: 'x_snc_chargeback_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '583f4975b224415caed553f3f3b3f483'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'discount_percent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58a6b0225aa742db9def9db4092682a8'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a763fa6b6cb44a0ae308d17b6f239d6'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5b7d418f1658432fbd9ade2831f35292'
                        key: {
                            sys_security_acl: '1de017fb68124d88b116ae43fcb302f2'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5c276d8040804ad781c356ad91d94646'
                        key: {
                            sys_ui_action: '40cbacef0b6748f18dcff2e83a4b11ba'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '5c5b846db3bc4a71944f0456f11516e4'
                        key: {
                            sys_ui_action: '1ce927525b014beda610a5f71f475314'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d03506d2dc240d7a5d533b9d760782c'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'license_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d13f2cde6f349ab8cd88795e077ad92'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'is_tax_exempt'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e2e154f1dc64fee850a3bdd45803549'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e2f7335b2674ab892144d1fa23c0c93'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'billing_period_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f98173c98074f21966e363716946254'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '620055d7d9254b61ac71802b7953e4bd'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'used_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '628fd50bb6564784a378eba2abe2084c'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'effective_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62997ae7917c45acb45a0e6df0ca06c7'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'billing_period_end'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '62d7b7f347774dddb16af153bb7c1612'
                        key: {
                            sys_security_acl: 'ed6aba3e473b4780898509c6f7b3c010'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64fe533a64554bcf9cd1613ffa373452'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '655f967d1f6a49f7baf5166b5445069f'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'integration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '664b143a664e4c9290ab621b0438ed0e'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66aa3e081b5e40aebf3a4fd9ed7ed7ac'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67821d6b830e4098969295a297438d1c'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'onboarding_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67c80578d4204b6fad41776fb4cf9d06'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68eadd1275954736b3a699d4b4ec3b8f'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '69161af1971c4037b625b2869b01f707'
                        key: {
                            sys_security_acl: 'd9ddd705eb4941208c3b8c52fb1df37b'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a24aaa9e57a4a91a2bffb48be26b24f'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contract_end_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6a3b939b53a046a6a98b8477c8307043'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b070aa2b4754394aa782609875512ec'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6cb9f7be683940bda609667cd5643704'
                        key: {
                            sys_security_acl: 'd9ddd705eb4941208c3b8c52fb1df37b'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '700af228389a4247a556304a3b361773'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '705dc25303b444e6ba5e42118e858d89'
                        key: {
                            sys_security_acl: 'f752dab3efb24fb6af9a8eb0ebe6be44'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71645c7709bd4080bd8f9ada45f76c80'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72232ca4f0ab40aba0cec5c693a49974'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '725399b793f9494d81a798bcf44ffc63'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                            value: 'adjustment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7264b6b2a4a0427994b4b9425f7aab7b'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'license_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72cd72840b164e638d4f6567e57bfe2b'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'net_total'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '72ddcc684b0447d18f4266d60d98f06a'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7419d7b2e3f34002a0e112ee3c19b2d5'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contact_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7488c1be4d0344cfa119bce0615f9e1e'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contract_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '74ae830afe9a44acb468e222f502de09'
                        key: {
                            sys_security_acl: '891134743c4744db85dbb3372b7cdfd3'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76a3f5248cf0429bb523db39b44b3b9c'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contact_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76c3a33bdd714ec98dc30ecaeb576d2e'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76e2c20fb5c74f888ec7f9638fd8e4db'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'industry'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '770d1b0d87314bc9b5b262ca04fb756d'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'total_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77598aafd81e4562a0b8cae9940c7875'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '776be8a170e844cc807c4cf539196521'
                        key: {
                            sys_ui_action: '1ce927525b014beda610a5f71f475314'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '797a86297c514d56bbd54ce1e45a9318'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b98205a4a764cb9b1e9c9a2f546f17e'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c84041036be468384e414c2fe32a17c'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'billing_period_start'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cacd54bb53945fcb16f36f740d33857'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7d1066d6f90b49b49d54a979f15e6b1c'
                        key: {
                            sys_security_acl: '1807ae55586548c3b4518aad601da1aa'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                        key: {
                            name: 'x_snc_chargeback.analyst'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80b5ec44bf08445cbbfe28d3b17291ac'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'requested_licenses'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8124b6cfc52a4c5fb4eab0de253a4280'
                        key: {
                            sys_security_acl: 'd9ddd705eb4941208c3b8c52fb1df37b'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '819f9512bd094dca9c53daffb18fcdf9'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'effective_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81aed9d3a2e74e898ddd5344e94ad3a3'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'termination_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82a1b4ec88c9421aa960cf42ab05c0af'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '838085c7077e4d1298a6251a136a5668'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'min_commit_qty'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8570e327e63344089e17037a38254c9a'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'chargeback_run'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85ed553c79ec4bad890376905459b9a9'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'invoice_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8636cbf2fae64d959e1581be2c65efd0'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '869c8a10d9b7479985bf74462dd689a4'
                        key: {
                            sys_security_acl: '5500ab0cd1c44a5fb6ab353f67cf9aa3'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88aed2323036482ab08b3bfc902157cd'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                        key: {
                            name: 'x_snc_chargeback.onboarding_specialist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '899ce3103b9b4cabb8b3e4e66035b9b0'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'is_subscription'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '89a789fe860f4b74b0f9319f7fee6ee8'
                        key: {
                            sys_security_acl: '59ac97c2865c41de8c31f5baadc7f251'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89b72e744196421f97c5b462ac936f06'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89daa1bc9473454cbef2a85c51099207'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8bb3819a09654b7d8f3583fabe1771fb'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8d9731125e554c35a9b3e639daa49650'
                        key: {
                            sys_security_acl: '851e2f70033a47f89df1004eea43c9fd'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e0ab65c61334a5cae8191bf8a7ae292'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'default_unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e24a40a6b15483c8910e8e5d775f1a9'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e3cd0e1d1f940baacd7af4489e41b60'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8efc92e80a4c419e897eb16d300475fb'
                        key: {
                            sys_security_acl: '574094e38abc453f9eeba7da6c2ea5f9'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fe18dfd6cf848baba2e78c4e03f4c7a'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '922f0aeffa03430bac0c33e87d842772'
                        key: {
                            sys_security_acl: '59ac97c2865c41de8c31f5baadc7f251'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92e5a9b62a1947e7ab174b67f8b31ce0'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            value: 'review'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '942aa95b993b4b8bba3bae1d980d03c5'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94c4aefd33d244d8b20cff2b838b7121'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '952faba471fa43e3b5f9c36b75dc5cff'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contact_phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95883c1e449b4abd8c424442e377b1af'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                            value: 'terminated'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '965ddfcb702f44509985e90f8a2ecea0'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '976041ab33ec44cdb4a230bd2149501c'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '97a8278cd5b5400a86119efd4cab7852'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'default_unit_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '985735a4a56c4b3bbf33c73cb4c34c8b'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'is_active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98f0bebbcd694c78b5acad446c1d6dfa'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'is_subscription'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '993df0d33eb54b94bfc0a810c32605f4'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'net_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a39ca685c5147f8a31aab822e212706'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'billing_period_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a7d85ee60a74884a865cb71c522acc1'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                            value: 'annual'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9bfa234cd9ab44e7a72d189ca7bca342'
                        key: {
                            name: 'x_snc_chargeback.admin'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9c17622ddc5d4b29a9d50c9be5436a0d'
                        key: {
                            sys_security_acl: '28a57a88a8514df499fca4c5755d8ff1'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c7c0dc5e5cc4ac9b158d2a7c1189376'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            value: 'onboarded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0b355f2ab984a3bb24528f67372ef18'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1991cad143442768297798dd6a82337'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a1cbb3aae8be43a392c6ff726692ba94'
                        key: {
                            sys_security_acl: '68dc692cbab240b08118221138455324'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a21cf9c701ac4579b01da8ac9c4be218'
                        key: {
                            sys_ui_action: 'c09cc087aa634179892a23d6eb506333'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a52ece82f0a34c4d9f448caa8dfb1d8b'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'effective_end'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a59142651b97420ab978085b1804fb3b'
                        key: {
                            name: 'x_snc_chargeback.billing_manager'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a66151f505964cf2ae70718ca4824e2f'
                        key: {
                            sys_security_acl: '4fda71d8fcae4331ad63078f919545d3'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a6bb6bbc93394ac1bd15eb6893f45586'
                        key: {
                            sys_security_acl: '44fe2040daf4428d9ff50c3672cea627'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a74b6fb909dc4e2999d9a9331900cd9a'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'estimated_users'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7659d0bae4744bd93b912ff13010ceb'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'billing_period_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a7b4f7a9d7984f8cb975939197e4585c'
                        key: {
                            sys_security_acl: '61a9ebce18304d9992bf5a64f8397618'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a991954f397b4e5da016e3ab3a8b6ad1'
                        key: {
                            sys_security_acl: '891134743c4744db85dbb3372b7cdfd3'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa05173b1c224d5ea1aeb955468bdf62'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aa839d7be2fa4d5785980a7f3d56398d'
                        key: {
                            sys_security_acl: 'd1338836603e4a0dad0acf2cca7afa4c'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab7a8ee1f674464f889249fd06a902dd'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab8602930eab4f078bc028533be6a0e6'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac0d3608419f4d81875e1220758a13fa'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac2c1ca5ec6547aa9f1ea26bdacd09e8'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae55718e34ec41aa8565ad77f0fcf08f'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'app_creator'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ae6142e5cedc48c2a26c9c716d107140'
                        key: {
                            sys_security_acl: '4272d1b2a09c49df89adb730a667247d'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae881eecaacc49af83cf8a1ed0efe088'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'af0e4a6edfe149d185db1cf473eed799'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0ccd115a047423c86d2a7ac18d41aba'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2b5b9fd753c442ca2e66884382e0382'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'run_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3568271dd5b49b486263e6f4a83d70d'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b59fb0d0cefd464998c6a2ad207433c4'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b5f2654cb7914d5a94f70bca0b1cdb69'
                        key: {
                            sys_security_acl: '1de017fb68124d88b116ae43fcb302f2'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b6630be6974340209fc90808be304e56'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'min_commit_qty'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b759c6b4f9e0404abc1b56c371e754b8'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'contract_term_months'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8e0c6d3fb7e4593b21779f3fb7e1c68'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9450ff7eeb34b399b081bb88bc1375c'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'industry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bb2bc98ff303447bb6a344f136f70cce'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb7bfa06603f4a91896072f031885f2e'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bda6723ab9ed4da497987e12417349a6'
                        key: {
                            sys_security_acl: '7fa6591465cc4afcae99f1429d4c2600'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdf57c3bd8804ca6a9168eb8bdd3fea7'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'contract_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'beb487d2d119452f81bd1dc3eefaecfe'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'max_allocations'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf903b60489f4168b5662859dfd54c3b'
                        key: {
                            sys_security_acl: 'ed6aba3e473b4780898509c6f7b3c010'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c06424977c6e431da4d6815a49b4965e'
                        key: {
                            sys_security_acl: '44fe2040daf4428d9ff50c3672cea627'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c143e662d8f14b9cae7c4af1cdd74568'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c3f57a1061bb4fa18730c3617c4f4599'
                        key: {
                            sys_security_acl: '421bc1ef21124f34a9e08cc318b7050d'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4080a9c954f47988b67b072d9e1e49e'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'onboarding_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c4b4b7bd19524402bc06fea34ac8fe3b'
                        key: {
                            sys_security_acl: '44fe2040daf4428d9ff50c3672cea627'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c53d4c85846f4370999f0231727a03fe'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c54cd2ad01ce403085444b770f2ea67c'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'primary_contact'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c599ce5c3b4c4bd08f859b1e4d04b730'
                        key: {
                            sys_security_acl: '1a53bab0a71c48f2ad3d9823bd827ebc'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c76a64565a624cd5a6029000e82c1e92'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c848fd472efc44e985e8c1e24075376a'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'effective_start'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c8d869c1c1754715baee3229a3af6bcb'
                        key: {
                            sys_security_acl: 'fed00fe71adb468dbdba8561f7c4d7b5'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'caf200bc979840aa993348df9a151900'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb0b0632af3f409b8391df9d89a4283d'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'onboarding_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc4c2e68dd0f431ea0e25ec218e04aeb'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd44734d89de4972a7fac3a764091565'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'billing_period_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf017804960a423780a8a54c3319899c'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'allocation_type'
                            value: 'renewal'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cf4ba6a0c7574b0ca4ce6a671131168b'
                        key: {
                            sys_security_acl: '01d372a5db584d1d88041b3924a2f2be'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf6ebca2bbaf449fb7781e328c2cb2a3'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd2547962ecf54b659a598fc52789cc9f'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd258fd9654f24688b59ef97d07c77b4f'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'rejection_reason'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd268b89547394795abc1f3a83a00fc22'
                        key: {
                            sys_security_acl: 'f752dab3efb24fb6af9a8eb0ebe6be44'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd294ba42adf342f694dfb7e0e321cd2c'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2a5f0f8ffdf4a1eae09b4ee7be082c5'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'billing_period_start'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd536cebf31b84ae7af343fc6830f7119'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'license_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8c9b74c43be4743a33461d3f4491965'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db21d37d82114af2b3578096ac30eb2d'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'customer_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd3d60b06e3f48c0a4ad7d54fc5cd7c8'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de2493f0bd024b278863ed154f173c85'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            value: 'invoiced'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e117824829d24a729bb52cf66f192ab8'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'effective_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1bb73f49ade4eef9cb5a84f9e513da7'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'billing_frequency'
                            value: 'yearly'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1bd9a43b8724d33909464570fb7bc7b'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e28a7f84f62842a2ba4b3c30e66e3bae'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'approval_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e29a6d28be0d4f01af18df0f3f417a86'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'discount_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3be0308c8724493a481fd90e7ec713f'
                        key: {
                            sys_security_acl: '1807ae55586548c3b4518aad601da1aa'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e677d49b4efd49bf8bfee4a4fc089ddc'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_contact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e91f5d55bfcb4d1eb1760ef2c8ae2d85'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'termination_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9650def467e43ff95a95059a7ea3018'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'approval_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eae733bdbe6c4004a121cd4b8945bf73'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecec4ba90ab6488db321072d62a62eee'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'onboarding_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ed2d35253d2b4924834ae17c6c5e8e62'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee09b64bf7f94f42aeaaf62db0eaa349'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'esm'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eea51f49347442399c059b8d15668ca5'
                        key: {
                            sys_security_acl: 'e056a58010e34284840ea3b8a5649092'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f04d755df04d441b98d6c527eaa1bc0d'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'line_total'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0a77e38303a47638a5c7bbe249ca285'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'license_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f10ba15fde8d40188c47ae0bd63d60d1'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f125ea17801140c081b2452a388d2b29'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                            value: 'quarterly'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f183fa51cff0419c9e38cf77071a061b'
                        key: {
                            sys_security_acl: '4272d1b2a09c49df89adb730a667247d'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f1a373313f984f84b59de34d2084d528'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f1c47ef949db47d998e4cafcc8547ea7'
                        key: {
                            sys_security_acl: '3b446d609b2645ce843ba1502d032e24'
                            sys_user_role: {
                                id: '7d86954b9fb54ffea0fad00c2bbce4e5'
                                key: {
                                    name: 'x_snc_chargeback.analyst'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f33d4bd46486472eb4bc424747da6f8a'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3d8afdb2b144d4a9a4ac90174880cbd'
                        key: {
                            name: 'x_snc_chargeback_rate_card'
                            element: 'unit_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3dcc3aeedd142188215a8a275363551'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4d8200efe7f435a8aa77aabe33c6f4f'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'unit_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f57537c582da48c48a2c22e5bd6d0579'
                        key: {
                            name: 'x_snc_chargeback_invoice_line'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f590e00770d2406c8888e2d9db84d1a5'
                        key: {
                            sys_security_acl: '3b446d609b2645ce843ba1502d032e24'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'f5a2158e038048ba9a627b18d5143df2'
                        key: {
                            sys_ui_action: '72cce0367f1a4be680c8fda3e5e8524d'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f6f6ce1bd7e4443a8a29fefbe5c60de1'
                        key: {
                            sys_security_acl: 'c7585b3f3b9c4513a9e652233058e4d1'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f79cebd636d349919ab84564c73de9fc'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7c91cfe0fd44820bc32205a8d379d14'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'estimated_users'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f82df306f0a34769b81b859661de341a'
                        key: {
                            sys_security_acl: '574094e38abc453f9eeba7da6c2ea5f9'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f88f578b7a1e4f56ba3ffbda9e2978a7'
                        key: {
                            sys_security_acl: '3b446d609b2645ce843ba1502d032e24'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9ef7d3118434e23928fb067ea85ea33'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'billing_cycle'
                            value: 'monthly'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'faa793bd0af64b83b2f448a1b4b7970b'
                        key: {
                            sys_security_acl: 'e056a58010e34284840ea3b8a5649092'
                            sys_user_role: {
                                id: '88ff4183cbbf4cf49f88b1b0e67cb27d'
                                key: {
                                    name: 'x_snc_chargeback.onboarding_specialist'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbe620a736c14d0eb1c503e462e57e1b'
                        key: {
                            name: 'x_snc_chargeback_license_allocation'
                            element: 'license_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbfe43fa697e436fbbae44972aad631d'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc3d924b8a1f4f278bcf597b1047f092'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc4625debcad47d5957d549d4c1d7633'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc9d989dd5ae4097a49fdd8d6d6dd499'
                        key: {
                            name: 'x_snc_chargeback_chargeback_run'
                            element: 'run_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fc9ef126019b4e79bc8238f468c7ee2d'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fca7ff9c32dc4a91a34d1abf54f64f9a'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fce7bd9b597b45c5a6e4c1b477a505b7'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fd80ab0a3c804fa6824603ec2a2617df'
                        key: {
                            sys_security_acl: '851e2f70033a47f89df1004eea43c9fd'
                            sys_user_role: {
                                id: 'a59142651b97420ab978085b1804fb3b'
                                key: {
                                    name: 'x_snc_chargeback.billing_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd825c034a96490cbb6c7ab934c3bac4'
                        key: {
                            name: 'x_snc_chargeback_onboarding_request'
                            element: 'customer_email'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'fe77e8aa23854dc1b6fbf57edadb7323'
                        key: {
                            sys_ui_action: '3929881e37fa4ed8a91c9d92d215ee4b'
                            sys_user_role: {
                                id: '9bfa234cd9ab44e7a72d189ca7bca342'
                                key: {
                                    name: 'x_snc_chargeback.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fff9a54e7b8740b489063d2a3200caef'
                        key: {
                            name: 'x_snc_chargeback_license_type'
                            element: 'category'
                            value: 'csm'
                        }
                    },
                ]
            }
        }
    }
}
