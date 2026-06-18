import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app-category-chargeback': {
                        table: 'sys_app_category'
                        id: '0060d966620b4d9999e2127723a7a6d2'
                        deleted: true
                    }
                    'app-menu-chargeback': {
                        table: 'sys_app_application'
                        id: 'e5d0b8c3e0be456bb2085e12317bd5b2'
                        deleted: false
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4a8bbb083b94440aaabd214439f9b361'
                    }
                    'br-count-fulfillers': {
                        table: 'sys_script'
                        id: '40505fa2f0c64745b9b848a1459975fd'
                    }
                    'br-customer-fulfillers': {
                        table: 'sys_script'
                        id: '004609302d4944c9aa94c61206ea5666'
                    }
                    'cm-headcount': {
                        table: 'x_snc_chargeback_charge_model'
                        id: 'c9d1da34d2864cfdb46e109800acefd0'
                    }
                    'cm-hybrid': {
                        table: 'x_snc_chargeback_charge_model'
                        id: '7193560696c64e4e99e82189e17b7a54'
                    }
                    'cm-tiered': {
                        table: 'x_snc_chargeback_charge_model'
                        id: '0a7a3f598dc94abcb3eea1c9a132876a'
                    }
                    'cm-usage': {
                        table: 'x_snc_chargeback_charge_model'
                        id: '3f78f6b0c8be4f75a25dfb9c8931456d'
                    }
                    'cust-amdp-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '46a993b8183c44d9963b96c49cda856d'
                    }
                    'cust-amdp-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '3acb1aef475147c487ac08f8a48cbc6f'
                    }
                    'cust-awm-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '10aadfeef00c4c9c83cce29457111281'
                    }
                    'cust-awm-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '181e722c2f3449bba1e42f524c5231a7'
                    }
                    'cust-awm-3': {
                        table: 'x_snc_chargeback_customer'
                        id: 'ea9b2d65313341d9a8a7b61394dda03c'
                    }
                    'cust-ca-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '0bba9066d17841f68c9b9ac660c11612'
                    }
                    'cust-ca-2': {
                        table: 'x_snc_chargeback_customer'
                        id: 'e150d27ef84d4051a077af3f84745bd8'
                    }
                    'cust-cao-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '532432214caa4dcb8875e04a0e539eb3'
                    }
                    'cust-cao-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '58b6af2835d84cb4baac09851979efcf'
                    }
                    'cust-cb-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '5273a9dcb5f74e53bd633588676ffeb2'
                    }
                    'cust-cb-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '93f1098bf52d47c0aba339cae487445b'
                    }
                    'cust-ccb-1': {
                        table: 'x_snc_chargeback_customer'
                        id: 'acd7afac1a6c493c93fd17b6148a2f18'
                    }
                    'cust-ccb-2': {
                        table: 'x_snc_chargeback_customer'
                        id: 'fa2601f92c6e4623952441d4b5ced4d4'
                    }
                    'cust-ccb-3': {
                        table: 'x_snc_chargeback_customer'
                        id: '28333cc9209a4e6da1050762b5437e95'
                    }
                    'cust-cdao-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '06b184f821d74357bcd9a51dbc881da5'
                    }
                    'cust-cdao-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '34172cb5edfb4f56b359610668176e38'
                    }
                    'cust-cdao-3': {
                        table: 'x_snc_chargeback_customer'
                        id: 'dc85e8770e7243e184bc86fd570ac51c'
                    }
                    'cust-cib-1': {
                        table: 'x_snc_chargeback_customer'
                        id: 'ed6f7422dc204adbbd9f605f4bad8d72'
                    }
                    'cust-cib-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '5d0e65abefd845f696c25c307a19bf05'
                    }
                    'cust-cib-3': {
                        table: 'x_snc_chargeback_customer'
                        id: '28b464bc1f224ce1b95a52f88e5475f1'
                    }
                    'cust-cs-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '14577b35f7e34115ada98b5bd965354b'
                    }
                    'cust-cs-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '960d91628fdb451a9428b2ccc87d79ff'
                    }
                    'cust-cs-3': {
                        table: 'x_snc_chargeback_customer'
                        id: '976d071e6b3c499bb10007064908d891'
                    }
                    'cust-cto-1': {
                        table: 'x_snc_chargeback_customer'
                        id: 'a8bf7de0902c47f68de008454915026c'
                    }
                    'cust-cto-2': {
                        table: 'x_snc_chargeback_customer'
                        id: 'aecbacbdb73d48e29fcb8f8cfbc9ab6f'
                    }
                    'cust-ep-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '9adce1087cab45d7b509af23a8b77f7d'
                    }
                    'cust-ep-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '3d7a8d91b13b4c7d84e1d3ca8f42a190'
                    }
                    'cust-ip-1': {
                        table: 'x_snc_chargeback_customer'
                        id: '3071623dc92c4fcaa3aeedfa38a23ad8'
                    }
                    'cust-ip-2': {
                        table: 'x_snc_chargeback_customer'
                        id: '2529aa6feb1c481b977a50b936858c50'
                    }
                    'lob-amdp': {
                        table: 'x_snc_chargeback_lob'
                        id: '69635b8231624eaabc606990ec3608de'
                    }
                    'lob-awm': {
                        table: 'x_snc_chargeback_lob'
                        id: '7d17571062ae427798a2b746eee5ced0'
                    }
                    'lob-ca': {
                        table: 'x_snc_chargeback_lob'
                        id: '5269ba451b6c4901bd1f606a42f563d7'
                    }
                    'lob-cao': {
                        table: 'x_snc_chargeback_lob'
                        id: 'b4251b4083ff4b2598aef8f82e5a3c1e'
                    }
                    'lob-cb': {
                        table: 'x_snc_chargeback_lob'
                        id: '193b57529b994d159c19803ce3a386c9'
                    }
                    'lob-ccb': {
                        table: 'x_snc_chargeback_lob'
                        id: '9f4ff80dfb414d71b2525ab3dda7655d'
                    }
                    'lob-cdao': {
                        table: 'x_snc_chargeback_lob'
                        id: 'cbf8e23001c44910b06ed6370fb0b6f7'
                    }
                    'lob-cib': {
                        table: 'x_snc_chargeback_lob'
                        id: 'e806ea13766647f7a0db870146db406c'
                    }
                    'lob-cs': {
                        table: 'x_snc_chargeback_lob'
                        id: '8fe4bfc517cf4f0692a46c0d91434e58'
                    }
                    'lob-cto': {
                        table: 'x_snc_chargeback_lob'
                        id: '9b550a1bfe9d4e96b7b6e7388b28a3f1'
                    }
                    'lob-ep': {
                        table: 'x_snc_chargeback_lob'
                        id: '56a5dee33b6542bdb9129edd05a3b4c7'
                    }
                    'lob-ip': {
                        table: 'x_snc_chargeback_lob'
                        id: 'e74dfa3ab4654af69494ffdb1cd84c68'
                    }
                    'mod-cb-group': {
                        table: 'sys_app_module'
                        id: '2a146a2a63af4a98aa6f9f059854b3aa'
                    }
                    'mod-charge-models': {
                        table: 'sys_app_module'
                        id: '8f5d04e359384772a7477cab38137070'
                    }
                    'mod-customers': {
                        table: 'sys_app_module'
                        id: '8ab1fc25d836414f803b32d084732a84'
                    }
                    'mod-lob-group': {
                        table: 'sys_app_module'
                        id: 'c3e7025d7f87478a8b19c49662154495'
                        deleted: true
                    }
                    'mod-lobs': {
                        table: 'sys_app_module'
                        id: 'cdc9736e49b24890968b5f778e7ca42e'
                    }
                    'module-lobs': {
                        table: 'sys_app_module'
                        id: 'ab87a12070cb4ef5b7495e9f83288762'
                        deleted: true
                    }
                    'module-new-lob': {
                        table: 'sys_app_module'
                        id: 'a28551aab0d14356bf165b4aece3b19f'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7223806663f047519029cdc4e853f16b'
                    }
                    'src_server_chargeback-utils_ts': {
                        table: 'sys_module'
                        id: 'ee66859e3af3418ebe766dae690c20c4'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '021b9c86a1a547aa975f4635c7853a7e'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'charge_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '02322e731afc42d1844f367b0b7df19d'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'charge_model'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '035cf2bd3ed3440e8d6b225a0460a44d'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0487bd4988b34ebfbbc38c907ffa4674'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'fulfiller_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06dec58b1f124ba3952c866896b30546'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_tier_lookup'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '07c28de726074db7aaddd675412db916'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '08270bb84f7a4fbd8f38bb313d55d7be'
                        key: {
                            ui_policy: {
                                id: '1b3e41304253436982646a73be0667db'
                                key: {
                                    table: 'x_snc_chargeback_customer'
                                    short_description: 'Show tier fields only when charge model is Tiered Package'
                                }
                            }
                            field: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '08bcc35b468242b4878e542f7c3ea5fd'
                        key: {
                            name: 'x_snc_chargeback_lob'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a08da81d09a49edb921e195ef473fa0'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                            value: 'usage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bc678c27b3f46f49114a5acbbe8cf89'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'is_recommended'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '0c03e0ef526e43dc94f0adf5b1456a64'
                        deleted: true
                        key: {
                            ui_policy: {
                                id: '9d4b883eec76432db27fb67a5d7474f7'
                                key: {
                                    table: 'x_snc_chargeback_lob'
                                    short_description: 'Show tier fields only when charge model is Tiered Package'
                                }
                            }
                            field: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d353ad1ba2741648b23263c32e5f083'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '108521db3a9a49ed822fa82ae5716533'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11520a03c62440238c036c9ada7a546b'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'monthly_tier_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '11e5a5c77f8249138a860ad0ea76f9cc'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            caption: 'LOB Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14d79092761e454eacb40e063192f6f3'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                            value: 'premium'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '16d84f42290342ab83a05cfa92d0b8b7'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17a85e68f9f34c71998c6cff090a98e3'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                            value: 'premium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a0ee7328f6741f4a53bbb98e2e893ee'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a635c27739d4f0c9a86ea6983069299'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'model_type'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a8527231fbf441e9f5a27b1e2e0462b'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1b29f7bd71db4062a8f98390fb1c6e36'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '1b3e41304253436982646a73be0667db'
                        key: {
                            table: 'x_snc_chargeback_customer'
                            short_description: 'Show tier fields only when charge model is Tiered Package'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1bce8059bc04493d9e170311523e9155'
                        key: {
                            name: 'x_snc_chargeback_lob'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '1ce3d3cdaee94ebd95047d06f8eecba1'
                        key: {
                            ui_policy: {
                                id: '1b3e41304253436982646a73be0667db'
                                key: {
                                    table: 'x_snc_chargeback_customer'
                                    short_description: 'Show tier fields only when charge model is Tiered Package'
                                }
                            }
                            field: 'monthly_tier_fee'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1da632d295f74526a55a171df6a51d63'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                            value: 'headcount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e293526ca744a82bc6069594353b8e5'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'lob'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '224eb2bf898e47c3af533cbf53c16691'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'formula'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27d68d2c894b4620891d63c60f694209'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cost_center'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a03279fb9ed443c9328132791c55f10'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'monthly_tier_fee'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2aaaa2a4cb65427fb96e5dcd35e89e51'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                            value: 'tiered'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30a32d5137a242bba30c1144c33c366c'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                            value: 'hybrid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '355a47cfe233485ab2a46ca40ac00ac9'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '377d67d8bd2b40eeb4d59a01b984dc85'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '38547abcb2a546a085357f6d2b9744b9'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '397168f383634e92a71506364293b0d8'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '397ec49729f5469288e15f3d11ff31b1'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '39fa4a8735154cebb1fc38b3163d0b19'
                        key: {
                            sys_ui_form: {
                                id: '6f342e6e75e54973a81c6f1bc8c62e9a'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'b025716384cc4fc3930069d5c12dfd48'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'Customers'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3c2a943340c94ff0b0fbe5da4332893d'
                        key: {
                            name: 'x_snc_chargeback_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e04f6ffa9c84e358eecbb63093af5d3'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f05aa1302584b01ade9d1e7af65f249'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '440d3663d1244f7d99a1d480fdca3b6f'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_transaction_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f78b6f96cd64a4a90eea976c8b515e0'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'is_recommended'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '517203d5125f48a3af9511e76c1d9e00'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5281b26e7c664b43bd5f8985e1384ca4'
                        deleted: true
                        key: {
                            ui_policy: {
                                id: '9d4b883eec76432db27fb67a5d7474f7'
                                key: {
                                    table: 'x_snc_chargeback_lob'
                                    short_description: 'Show tier fields only when charge model is Tiered Package'
                                }
                            }
                            field: 'monthly_tier_fee'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '576cbe0d69e346d38b1cd82410944ce1'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5ae13a905907414ba847236f6f2276dc'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tier_package'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c23c4fdb62e42888321d096403be9d9'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'fulfiller_count'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5c44cb65ac0b4d42b71e0d6af5683901'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            caption: 'Customer Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63286405ecbf47089013eb8d4c92262c'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'fulfiller_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65a0ab286f374e869e516e826ad9a4ad'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_user_count'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6748fc5d205f41ab84f552829d6b1137'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                            value: 'basic'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6a0c2d70b362464b9f6ce8b677100950'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b6f950b56a646cc8df9d8d2af372757'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d657f75e22e48458f025221f266c79b'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                            value: 'basic'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e8f7ecb02f74c2d944412d7ca82c5aa'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'monthly_tier_fee'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '6f342e6e75e54973a81c6f1bc8c62e9a'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '728efc7462c543e4ae8f77221c8dae1b'
                        key: {
                            name: 'x_snc_chargeback_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76ab1d6734854369bbeae93ea12ba4a0'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76cd38ca4fc74252a37793695b97e562'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'monthly_tier_fee'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7728adac080641788bbd75a38ab239ca'
                        key: {
                            sys_ui_section: {
                                id: 'b025716384cc4fc3930069d5c12dfd48'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'Customers'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_snc_chargeback_lob.x_snc_chargeback_customer.lob'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a2b5304e2b64ea4addd136d26f1859c'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82c692df00ac4943bfd3e1be0be6b33e'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '84c26efe7b3449e9aaa9bad82028ef9b'
                        key: {
                            sys_ui_form: {
                                id: '38547abcb2a546a085357f6d2b9744b9'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '854002d9dde644b1822760a8cd4bf7b8'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8891948a2aca48f7a0ffac3106559604'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'lob'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89595d4780b84e57b0582bc7c464bc6d'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'charge_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92fc2a220dd14650857bd9d665535223'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_tier_lookup'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93517fcb586b4a2f84bf54f849ab430e'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '955ee41e752447e7a44b03adc9f759bb'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'parent_lob'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9692aa2fea4f496ab74bd894e38df1b3'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96a6c05a187c45258540a6939af1376c'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96bd25a184684df8a86a1bfbf57ed5d8'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '9d4b883eec76432db27fb67a5d7474f7'
                        deleted: true
                        key: {
                            table: 'x_snc_chargeback_lob'
                            short_description: 'Show tier fields only when charge model is Tiered Package'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9eb73c5c3ace4a7abf33aeb1c72ac16a'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3b272a92fbe4eb1a164914dc10ceba2'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a80a75b99d454110afad1355108ff37e'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'formula'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a882fea601a64ebd8f6dd5183ba5e7d4'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b025716384cc4fc3930069d5c12dfd48'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            caption: 'Customers'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b362093980a94347ac0194d0fbbd1e80'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3e4ded2a85949498abf6512a47fa499'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_transaction_count'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3f3c67fab214e859a7a700dc9f80b0c'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'needs_user_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b56dace48f904f19a9600afe373157d7'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'lob'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8273c3c2e494b26a31a83b629be2a02'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'charge_model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8e0ae4c38774e28a1c23627d687ee1a'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd1989ebe8af454ebc4cc67aea1b5e1d'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0a7144e17704694953769245b22480c'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'parent_lob'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c14815440ad442d6ae8780694cb09ebf'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4d19ade40e843dba430086c75d1e9a5'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'tier_package'
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c503a8c1cb8c4f95bca1b67658a182a2'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c60b5045cc4a4968a070d3e01e5bbce0'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fulfiller_count'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c63f610777d4493ab5ae12ce27986b68'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb1f61e9b8e44e3db9b4a27b9c9e2d94'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc7472535ca04dabb74bc2e5287962c7'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'fulfiller_count'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ce4e30ba86f347fba53d92f70e3539d9'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'cf0ad04337654096b1a5094d0adfce18'
                        key: {
                            sys_ui_form: {
                                id: '6f342e6e75e54973a81c6f1bc8c62e9a'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1d6cd30d44e44a692f755020b9779af'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd204edc9ea2c48f19ca3c10056d2f0b6'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd25385ffd57f4310a6e65fced8f35595'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2cc2a5ffd294b96a80352a1cdbcf645'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_lob'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6a81efef7be414fab7a9d7b57b37b2a'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd6c22cc22d5f4f9886cfde6d1e9670af'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'model_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9f4be0257b84fd7a7206714341f2ec7'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de10230a205f4513b605a5ce2965ccbe'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'def04c869ed34b7484c08c8a74221ed0'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cost_center'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2ea50f4dcab4a24bddadc9b92789702'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e3b89cd716cb4eb7ba7bbeda73e9a2dd'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fulfiller_count'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e4d728a457ae4c5980eafffcbb95b4d3'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e7d494538ad2451c850c520a604ae855'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'tier_package'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e95c88bf92f9480995280c5297036fae'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ecf1b0036f604655b1473c9fd4b1186f'
                        key: {
                            name: 'x_snc_chargeback_charge_model'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed6333445e9b4d56bf248070be963366'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edd93b95efa94e5d94946a16d5e153b6'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'monthly_tier_fee'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eebdcfb84ed042ddbe023aa7efabfcef'
                        key: {
                            sys_ui_section: {
                                id: '11e5a5c77f8249138a860ad0ea76f9cc'
                                key: {
                                    name: 'x_snc_chargeback_lob'
                                    caption: 'LOB Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'effc77eadcbb4e3bad273ee0c3ab9212'
                        key: {
                            sys_ui_section: {
                                id: '5c44cb65ac0b4d42b71e0d6af5683901'
                                key: {
                                    name: 'x_snc_chargeback_customer'
                                    caption: 'Customer Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0c54536360446ab9c037851301a17e1'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f42baef90afd430892a819b4043554e4'
                        key: {
                            name: 'x_snc_chargeback_customer'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'feca4d496b624e60b656f89afcd1116a'
                        key: {
                            name: 'x_snc_chargeback_lob'
                            element: 'charge_model'
                        }
                    },
                ]
            }
        }
    }
}
