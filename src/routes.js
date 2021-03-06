const rts = {
    "system": {
        "name": "system",
        "text": "System",
        "icon": "system",
        "children": [
            {
                "name": "settings",
                "text": "Settings",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "basic",
                        "text": "Basic",
                        "gid": "732"
                    },
                    {
                        "name": "maintenance",
                        "text": "Maintenance",
                        "widget": "SystemSettingsMaintenance"
                    },
                    {
                        "name": "services",
                        "text": "Services",
                        "widget": "SystemSettingsDependents"
                    },
                    {
                        "name": "fortiguard",
                        "text": "FortiGuard",
                        "widget": "SystemSettingsFortiGuard"
                    },
                    {
                        "name": "sync-list",
                        "text": "Sync List",
                        "gid": "4525"
                    },
                    {
                        "name": "backup_restore",
                        "text": "Backup&Restore",
                        "widget": "Backup_Restore"
                    }

                ]
            },
            {
                "name": "getting_started",
                "text": "Getting Started",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "getting_started_system",
                        "text": "System",
                        "widget": "SystemGettingStartedMaintenance"
                    },
                    {
                        "name": "getting_started_network",
                        "text": "Network",
                        "widget": "SystemGettingStartedNetwork"
                    },
                    {
                        "name": "getting_started_slb",
                        "text": "Server Load Balance",
                        "widget": "SystemGettingStartedSlb"
                    }

                ]
            },
            {
                "name": "ha",
                "text": "High Availability",
                "gid": "282"
            },
            {
                "name": "trafficgroup",
                "text": "Traffic Group",
                "gid": "1459"
            },
            {
                "name": "administrator",
                "text": "Administrator",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "admin",
                        "text": "Admin",
                        "gid": "78"
                    },
                    {
                        "name": "accprofile",
                        "text": "Access Profile",
                        "gid": "772"
                    },
                    {
                        "name": "password_policy",
                        "text": "Password Policy",
                        "gid": "1061"
                    }
                ]
            },
            {
                "name": "snmp",
                "text": "SNMP",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "sysinfo",
                        "text": "System Information",
			"widget": "SystemInformationView"
                    },
                    {
                        "name": "community",
                        "text": "SNMPv1/v2",
                        "gid": "318"
                    },
                    {
                        "name": "user",
                        "text": "SNMPv3",
                        "gid": "1152"
                    }
                ]
            },
            {
                "name": "debug",
                "text": "Debug",
                "widget": "SystemDebug"
            },
            {
                "name": "certificate",
                "text": "Certificate",
                "children": [
                    {
                        "name": "manage_certificate",
                        "text": "Manage Certificates",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "local_cert_group",
                                "text": "Local Certificate Group",
                                "gid": "2401"
                            },
                            {
                                "name": "local",
                                "text": "Local Certificate",
                                "gid": "849"
                            },
                            {
                                "name": "intermediate_ca_group",
                                "text": "Intermediate CA Group",
                                "gid": "1608"
                            },
                            {
                                "name": "intermediate_ca",
                                "text": "Intermediate CA",
                                "gid": "1605"
                            },
                            {
                                "name": "sys_ocsp_stapling",
                                "text": "OCSP Stapling",
                                "gid": "5241"
                            }                        ]
                    },
                    {
                        "name": "certificate_verify",
                        "text": "Verify",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "certificate_verify",
                                "text": "Verify",
                                "gid": "1613"
                            },
                            {
                                "name": "crl",
                                "text": "CRL",
                                "gid": "921"
                            },
                            {
                                "name": "ocsp",
                                "text": "OCSP",
                                "gid": "4824"
                            },
                            {
                                "name": "remote",
                                "text": "OCSP Signing Certificates",
                                "gid": "930"
                            },
                            {
                                "name": "ca_group",
                                "text": "CA Group",
                                "gid": "1600"
                            },
                            {
                                "name": "ca",
                                "text": "CA",
                                "gid": "918"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "alert_category",
                "text": "Alert",
                "children": [
                    {
                        "name": "alert",
                        "text": "Alert",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "alert_policy",
                                "text": "Alert Policy",
                                "gid": "5183"
                            },
                            {
                                "name": "alert_config",
                                "text": "Alert Config",
                                "gid": "5164"
                            },
                            {
                                "name": "alert_actions",
                                "text": "Alert Actions",
                                "gid": "5158"
                            }
                        ]
                    },
                    {
                        "name": "alert_resource",
                        "text": "Alert Resource",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "syslog",
                                "text": "Syslog",
                                "gid": "5150"
                            },
                            {
                                "name": "email",
                                "text": "Email",
                                "gid": "5154"
                            },
                            {
                                "name": "snmp_trap_server",
                                "text": "SNMP Trap Server",
                                "gid": "5201"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "hsm",
                "text": "HSM",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "hsm_all",
                        "text": "HSM",
                        "widget": "SystemHsm"
                    }
                ]
            }
        ]
    },
    "super_admin_system": {
        "name": "super_admin_system",
        "text": "System",
        "icon": "system",
        "children": [
            {
                "name": "settings",
                "text": "Settings",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "basic",
                        "text": "Basic",
                        "gid": "732"
                    },
                    {
                        "name": "maintenance",
                        "text": "Maintenance",
                        "widget": "SystemSettingsMaintenance"
                    },
                    {
                        "name": "services",
                        "text": "Services",
                        "widget": "SystemSettingsDependents"
                    },
                    {
                        "name": "fortiguard",
                        "text": "FortiGuard",
                        "widget": "SystemSettingsFortiGuard"
                    },
                    {
                        "name": "sync-list",
                        "text": "Sync List",
                        "gid": "4525"
                    },
                    {
                        "name": "backup_restore",
                        "text": "Backup&Restore",
                        "widget": "Backup_Restore"
                    }
                ]
            },
            {
                "name": "ha",
                "text": "High Availability",
                "gid": "282"
            },
            {
                "name": "trafficgroup",
                "text": "Traffic Group",
                "gid": "1459"
            },
            {
                "name": "administrator",
                "text": "Administrator",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "admin",
                        "text": "Admin",
                        "gid": "78"
                    },
                    {
                        "name": "accprofile",
                        "text": "Access Profile",
                        "gid": "772"
                    },
                    {
                        "name": "password_policy",
                        "text": "Password Policy",
                        "gid": "1061"
                    }
                ]
            },
            {
                "name": "snmp",
                "text": "SNMP",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "sysinfo",
                        "text": "System Information",
			"widget": "SystemInformationView"
                    },
                    {
                        "name": "community",
                        "text": "SNMPv1/v2",
                        "gid": "318"
                    },
                    {
                        "name": "user",
                        "text": "SNMPv3",
                        "gid": "1152"
                    }
                ]
            },
            {
                "name": "debug",
                "text": "Debug",
                "widget": "SystemDebug"
            },
            {
                "name": "certificate",
                "text": "Certificate",
                "children": [
                    {
                        "name": "manage_certificate",
                        "text": "Manage Certificates",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "local_cert_group",
                                "text": "Local Certificate Group",
                                "gid": "2401"
                            },
                            {
                                "name": "local",
                                "text": "Local Certificate",
                                "gid": "849"
                            },
                            {
                                "name": "intermediate_ca_group",
                                "text": "Intermediate CA Group",
                                "gid": "1608"
                            },
                            {
                                "name": "intermediate_ca",
                                "text": "Intermediate CA",
                                "gid": "1605"
                            },
                            {
                                "name": "sys_ocsp_stapling",
                                "text": "OCSP Stapling",
                                "gid": "5241"
                            }
                        ]
                    },
                    {
                        "name": "certificate_verify",
                        "text": "Verify",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "certificate_verify",
                                "text": "Verify",
                                "gid": "1613"
                            },
                            {
                                "name": "crl",
                                "text": "CRL",
                                "gid": "921"
                            },
                            {
                                "name": "ocsp",
                                "text": "OCSP",
                                "gid": "4824"
                            },
                            {
                                "name": "remote",
                                "text": "OCSP Signing Certificates",
                                "gid": "930"
                            },
                            {
                                "name": "ca_group",
                                "text": "CA Group",
                                "gid": "1600"
                            },
                            {
                                "name": "ca",
                                "text": "CA",
                                "gid": "918"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "hsm",
                "text": "HSM",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "hsm_all",
                        "text": "HSM",
                        "widget": "SystemHsm"
                    }
                ]
            }
        ]
    },
    "vdom_user_system": {
        "name": "vdom_user_system",
        "text": "System",
        "icon": "system",
        "children": [
            {
                "name": "administrator",
                "text": "Administrator",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "admin",
                        "text": "Admin",
                        "gid": "78"
                    }
                ]
            },
            {
                "name": "certificate",
                "text": "Certificate",
                "children": [
                    {
                        "name": "manage_certificate",
                        "text": "Manage Certificates",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "local_cert_group",
                                "text": "Local Certificate Group",
                                "gid": "2401"
                            },
                            {
                                "name": "local",
                                "text": "Local Certificate",
                                "gid": "849"
                            },
                            {
                                "name": "intermediate_ca_group",
                                "text": "Intermediate CA Group",
                                "gid": "1608"
                            },
                            {
                                "name": "intermediate_ca",
                                "text": "Intermediate CA",
                                "gid": "1605"
                            },
                            {
                                "name": "sys_ocsp_stapling",
                                "text": "OCSP Stapling",
                                "gid": "5241"
                            }
                        ]
                    },
                    {
                        "name": "certificate_verify",
                        "text": "Verify",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "certificate_verify",
                                "text": "Verify",
                                "gid": "1613"
                            },
                            {
                                "name": "crl",
                                "text": "CRL",
                                "gid": "921"
                            },
                            {
                                "name": "ocsp",
                                "text": "OCSP",
                                "gid": "4824"
                            },
                            {
                                "name": "remote",
                                "text": "OCSP Signing Certificates",
                                "gid": "930"
                            },
                            {
                                "name": "ca_group",
                                "text": "CA Group",
                                "gid": "1600"
                            },
                            {
                                "name": "ca",
                                "text": "CA",
                                "gid": "918"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "alert_category",
                "text": "Alert",
                "children": [
                    {
                        "name": "alert",
                        "text": "Alert",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "alert_policy",
                                "text": "Alert Policy",
                                "gid": "5183"
                            },
                            {
                                "name": "alert_config",
                                "text": "Alert Config",
                                "gid": "5164"
                            },
                            {
                                "name": "alert_actions",
                                "text": "Alert Actions",
                                "gid": "5158"
                            }
                        ]
                    },
                    {
                        "name": "alert_resource",
                        "text": "Alert Resource",
                        "widget": "MultipleModulesConfig",
                        "modules": [
                            {
                                "name": "syslog",
                                "text": "Syslog",
                                "gid": "5150"
                            },
                            {
                                "name": "email",
                                "text": "Email",
                                "gid": "5154"
                            },
                            {
                                "name": "snmp_trap_server",
                                "text": "SNMP Trap Server",
                                "gid": "5201"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "resources": {
        "name": "resources",
        "text": "Shared Resources",
        "icon": "resources",
        "children": [
            {
                "name": "health-check",
                "text": "Health Check",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "health-check",
                        "text": "Health Check",
                        "gid": "2763"
                    },
                    {
                        "name": "health-check-monitor",
                        "text": "Health Check Monitor",
                        "widget": "HCMonitorView"
                    }
                ]
            },
            {
                "name": "schedule_group",
                "text": "Schedule Group",
                "gid": "211"
            },
            {
                "name": "address",
                "text": "Address",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "address_group",
                        "text": "Address Group",
                        "gid": "3806"
                    },
                    {
                        "name": "address",
                        "text": "Address",
                        "gid": "3800"
                    },
                    {
                        "name": "address6_group",
                        "text": "IPv6 Address Group",
                        "gid": "3817"
                    },
                    {
                        "name": "address6",
                        "text": "IPv6 Address",
                        "gid": "3811"
                    },
                    {
                        "name": "isp_address",
                        "text": "ISP Address",
                        "gid": "2736"
                    }
                ]
            },
            {
                "name": "service",
                "text": "Service",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "service_group",
                        "text": "Service Group",
                        "gid": "3829"
                    },
                    {
                        "name": "service",
                        "text": "Service",
                        "gid": "3822"
                    }
                ]
            }
        ]
    },
    "networking": {
        "name": "networking",
        "text": "Networking",
        "icon": "networking",
        "children": [
            {
                "name": "interface",
                "text": "Interface",
                "widget": "NetworkingInterface"
            },
            {
                "name": "routing",
                "text": "Routing",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "static",
                        "text": "Static",
                        "gid": "57"
                    },
                    {
                        "name": "policy",
                        "text": "Policy",
                        "gid": "1936"
                    },
                    {
                        "name": "ospf",
                        "text": "OSPF",
			"widget": "RoutingOspfNewEditorsView"
                    },
                    {
                        "name": "isp",
                        "text": "ISP",
                        "gid": "2745"
                    },
                    {
                        "name": "bgp",
                        "text": "BGP",
                        "gid": "4650"
                    },
                    {
                        "name": "access-list",
                        "text": "Access List",
                        "gid": "4751"
                    },
                    {
                        "name": "access-list6",
                        "text": "Access IPv6 List",
                        "gid": "4759"
                    },
                    {
                        "name": "prefix-list",
                        "text": "Prefix List",
                        "gid": "4767"
                    },
                    {
                        "name": "prefix-list",
                        "text": "Prefix IPv6 List",
                        "gid": "4776"
                    }
                ]
            },
            {
                "name": "nat",
                "text": "NAT",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "nat-snat",
                        "text": "Source",
                        "gid": "1941"
                    },
                    {
                        "name": "vip",
                        "text": "1-to-1 NAT",
                        "gid": "661"
                    }
                ]
            },
            {
                "name": "qos",
                "text": "QoS",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "qos-filter",
                        "text": "QoS Filter",
                        "gid": "1922"
                    },
                    {
                        "name": "qos-filter6",
                        "text": "QoS IPv6 Filter",
                        "gid": "1929"
                    },
                    {
                        "name": "qos-queue",
                        "text": "QoS Queue",
                        "gid": "1909"
                    }
                ]
            },
            {
                "name": "tcpdump",
                "text": "Packet Capture",
                "gid": "2725"
            }
        ]
    },
    "super_admin_networking": {
        "name": "super_admin_networking",
        "text": "Networking",
        "icon": "networking",
        "children": [
            {
                "name": "interface",
                "text": "Interface",
                "widget": "NetworkingInterface"
            }
        ]
    },
    "waf": {
        "name": "waf",
        "text": "Web Application Firewall",
        "icon": "waf",
        "children": [
            {
                "name": "waf",
                "text": "Web Application Firewall",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "waf_profile",
                        "text": "WAF Profile",
                        "gid": "3000"
                    },
                    {
                        "name": "web-attack-signature",
                        "text": "Web Attack Signature",
                        "widget": "WafSignature"
                    },
                    {
                        "name": "waf_url_protection",
                        "text": "URL Protection",
                        "gid": "3050"
                    },
                    {
                        "name": "waf_http_cons",
                        "text": "HTTP Protocol Constraint",
                        "gid": "3062"
                    },
                    {
                        "name": "waf_sql_xss_injection_detection",
                        "text": "SQL/XSS Injection Detection",
                        "gid": "3138"
                    },
                    {
                      	"name": "waf_exception",
                        "text": "Exceptions",
                        "gid": "3200"
                    },
                    {
                        "name": "waf_bot_detection",
                        "text": "Bot Detection",
                        "gid": "3220"
                    }
                ]
            },
            {
                "name": "xml_json_validation",
                "text": "XML & JSON Validation",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "xml_validation",
                        "text": "XML Detection",
                        "gid": "3240"
                    },
                    {
                        "name": "json_validation",
                        "text": "JSON Detection",
                        "gid": "3120"
                    },
                    {
                        "name": "xml_schema",
                        "text": "XML Schema",
                        "gid": "3263"
                    }
                ]
            }
        ]
    },
    "security": {
        "name": "security",
        "text": "Network Security",
        "icon": "security",
        "children": [
            {
                "name": "reputation",
                "text": "IP Reputation",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "reputation",
                        "text": "IP Reputation",
                        "gid": "2064"
                    },
                    {
                        "name": "reputation-exception",
                        "text": "IP Reputation Exception",
                        "gid": "2071"
                    }
                ]
            },
            {
                "name": "geo-ip",
                "text": "Geo IP Protection",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "geoip-list",
                        "text": "Geo IP Protection",
                        "gid": "2883"
                    },
                    {
                        "name": "whitelist",
                        "text": "Whitelist",
                        "gid": "2893"
                    }
                ]
            },
            {
                "name": "dos-prevention",
                "text": "SYN Flood Prevention",
                "gid": "1618"
            },
            {
                "name": "firewall",
                "text": "Firewall",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "policy",
                        "text": "IPv4 Firewall Policy",
                        "gid": "1869"
                    },
                    {
                        "name": "policy6",
                        "text": "IPv6 Firewall Policy",
                        "gid": "1879"
                    },
                    {
                        "name": "connlimit",
                        "text": "IPv4 Connection Limit Policy",
                        "gid": "1889"
                    },
                    {
                        "name": "connlimit6",
                        "text": "IPv6 Connection Limit Policy",
                        "gid": "1899"
                    }
                ]
            }
        ]
    },
    "slb": {
        "name": "slb",
        "text": "Server Load Balance",
        "icon": "slb",
        "children": [
            {
                "name": "virtual-server",
                "text": "Virtual Server",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "virtual-server",
                        "text": "Virtual Server",
                        "gid": "1775"
                    },
                    {
                        "name": "content-rewriting",
                        "text": "Content Rewriting",
                        "gid": "1737"
                    },
                    {
                        "name": "content-routing",
                        "text": "Content Routing",
                        "gid": "1756"
                    },
                    {
                        "name": "ippool",
                        "text": "NAT Source Pool",
                        "gid": "2034"
                    },
                    {
                        "name": "schedule-pool",
                        "text": "Schedule Pool",
                        "gid": "5473"
                    }
                ]
            },
            {
                "name": "profile",
                "text": "Application Resources",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "profile",
                        "text": "Application Profile",
                        "gid": "1643"
                    },
                    {
                        "name": "client_ssl_profile",
                        "text": "Client SSL",
                        "gid": "4931"
                    },
                    {
                        "name": "http2_profile",
                        "text": "HTTP2 Profile",
                        "gid": "5215"
                    },
                    {
                        "name": "method",
                        "text": "LB Method",
                        "gid": "1726"
                    },
                    {
                        "name": "persistence",
                        "text": "Persistence",
                        "gid": "1729"
                    },
                    {
                        "name": "error-page",
                        "text": "Error Page",
                        "gid": "2051"
                    },
                    {
                        "name": "decompression",
                        "text": "Decompression",
                        "gid": "5002"
                    }
                ]
            },{
                "name": "application_optimization",
                "text": "Application Optimization",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "page_speed",
                        "text": "Page Speed",
                        "gid": "5315"
                    },
                    {
                        "name": "page_speed_profile",
                        "text": "Page Speed Profile",
                        "gid": "5300"
                    },
                    {
                        "name": "compression",
                        "text": "Compression",
                        "gid": "1627"
                    },
                    {
                        "name": "caching",
                        "text": "Caching",
                        "gid": "2054"
                    }
                ]
            },
            {
                "name": "pool",
                "text": "Real Server Pool",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "pool",
                        "text": "Real Server Pool",
                	"gid": "1705"
                    },
                    {
                        "name": "real_server",
                        "text": "Real Server",
                        "gid": "4915"
                    },
                    {
                        "name": "real_server_profile",
                        "text": "Server SSL",
                        "gid": "3862"
                    }
                ]
            },
            {
                "name": "scripting",
                "text": "Scripting",
                "gid": "2800"
            },
            {
                "name": "ssl-fp-resources",
                "text": "SSL-FP Resources",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "l2-exception-list",
                        "text": "L2 Exception List",
                        "gid": "3880"
                    },
                    {
                        "name": "web-filter-profile",
                        "text": "Web Filter Profile",
                        "gid": "4622"
                    },
                    {
                        "name": "web-category",
                        "text": "Web Category",
                        "widget": "SLBVirtualServerWebCategory"
                    },
                    {
                        "name": "cert-caching",
                        "text": "Certificate Caching",
                        "gid": "4994"
                    }
                ]
            }
        ]
    },
    "llb": {
        "name": "llb",
        "text": "Link Load Balance",
        "icon": "llb",
        "children": [
            {
                "name": "flow-policy",
                "text": "Link Policy",
                "gid": "633"
            },
            {
                "name": "link-group",
                "text": "Link Group",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "link-group",
                        "text": "Link Group",
                        "gid": "618"
                    },
                    {
                        "name": "gateway",
                        "text": "Gateway",
                        "gid": "2501"
                    },
                    {
                        "name": "persistence",
                        "text": "Persistence",
                        "gid": "674"
                    },
                    {
                        "name": "proximity-route",
                        "text": "Proximity Route",
                        "gid": "681"
                    }
                ]
            },
            {
                "name": "virtual-tunnel",
                "text": "Virtual Tunnel",
                "gid": "222"
            }
        ]
    },
    "glb": {
        "name": "glb",
        "text": "Global Load Balance",
        "icon": "glb",
        "children": [
            {
                "name": "global-object",
                "text": "Global Object",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "server",
                        "text": "Server",
                        "gid": "2841"
                    },
                    {
                        "name": "link",
                        "text": "Link",
                        "gid": "4844"
                    },
                    {
                        "name": "data-center",
                        "text": "Data Center",
                        "gid": "2836"
                    }
                ]
            },
            {
                "name": "fqdn-settings",
                "text": "FQDN Settings",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "host",
                        "text": "Host",
                        "gid": "2869"
                    },
                    {
                        "name": "virtual-server-pool",
                        "text": "Virtual Server Pool",
                        "gid": "2858"
                    },
                    {
                        "name": "topology",
                        "text": "Location List",
                        "gid": "4982"
                    },
                    {
                        "name": "glb_proximity",
                        "text": "GLB Setting",
                        "gid": "3500"
                    }
                ]
            },
            {
                "name": "zone-tools",
                "text": "Zone Tools",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "policy",
                        "text": "Global DNS Policy",
                        "gid": "2236"
                    },
                    {
                        "name": "zone",
                        "text": "Zone",
                        "gid": "2248"
                    },
                    {
                        "name": "general",
                        "text": "General Settings",
                        "gid": "2244"
                    },
                    {
                        "name": "trust-anchor-key",
                        "text": "Trust Anchor Key",
                        "gid": "2240"
                    },
                    {
                        "name": "dns64",
                        "text": "DNS64",
                        "gid": "2289"
                    },
                    {
                        "name": "dsset-info-list",
                        "text": "DSSET List",
                        "gid": "2303"
                    },
                    {
                        "name": "address-group",
                        "text": "Address Group",
                        "gid": "2206"
                    },
                    {
                        "name": "remote-dns-server",
                        "text": "Remote DNS Server",
                        "gid": "2329"
                    },
                    {
                        "name": "response-rate-limit",
                        "text": "Response Rate Limit",
                        "gid": "2313"
                    }
                ]
	    }
        ]
    },
    "vdom": {
        "name": "vdom",
        "text": "Virtual Domain",
        "icon": "vdom",
        "children": [
            {
                "name": "vdom",
                "text": "Virtual Domain",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "vdom",
                        "text": "Virtual Domain",
                        "widget": "VDomView"
                    }
                ]
            }
        ]
    },
    "user": {
        "name": "user",
        "text": "User Authentication",
        "icon": "user",
        "children": [
            {
                "name": "auth-policy",
                "text": "Authentication Policy",
                "gid": "3320"
            },
            {
                "name": "user-group",
                "text": "User Group",
                "gid": "3300"
            },
            {
                "name": "local-user",
                "text": "Local User",
                "gid": "2631"
            },
            {
                "name": "remote-user",
                "text": "Remote Server",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "ldap",
                        "text": "LDAP Server",
                        "gid": "2621"
		    },
                    {
                        "name": "radius",
                        "text": "RADIUS Server",
                        "gid": "2601"
                    }
                ]
            },
            {
                "name": "authentication-relay",
                "text": "Authentication Relay",
                "gid": "2661"
            },
            {
                "name": "saml",
                "text": "SAML",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "saml_sso",
                        "text": "SAML Service Providers",
                        "gid": "4863"
                    },
                    {
                        "name": "saml_idp",
                        "text": "IDP Metadata",
                        "gid": "4859"
                    }
                ]
            }
        ]
    },
    "status": {
        "name": "status",
        "text": "Dashboard",
        "icon": "status",
        "children": [
            {
                "name": "status",
                "text": "Dashboard",
                "widget": "Status"
            }
        ]
    },
    "view": {
        "name": "view",
        "text": "FortiView",
        "icon": "view",
        "children": [
            {
                "name": "tree",
                "text": "Logical Topology",
                "widget": "ViewTree"
            },
            {
                "name": "server_load_balance",
                "text": "Server Load Balance",
                "children": [
                    {
                        "name": "list",
                        "text": "Virtual Server",
                        "widget": "ViewList"
                    },
                    {
                        "name": "slb_analytics",
                        "text": "Data Analytics",
                        "widget": "StatusLoadBalanceGlobalViewConfig"
                    },
                    {
                        "name": "slb_traffic_log",
                        "text": "Traffic Logs",
                        "widget": "SlbTrafficEventLog"
                    }
                ]
            },
            {
                "name": "security",
                "text": "Security",
                "children": [
                    {
                        "name": "threat_map",
                        "text": "Threat Map",
                        "widget": "ThreatMap"
                    },
                    {
                        "name": "wa_analytics",
                        "text": "Data Analytics",
                        "widget": "StatusLoadBalanceGlobalViewConfig"
                    },
                    {
                        "name": "waf_log",
                        "text": "WAF Security Logs",
                        "widget": "WafEventLog"
                    }
                ]
            },
            {
                "name": "all_segments",
                "text": "All Segments",
                "children": [
                    {
                        "name": "events",
                        "text": "System Events",
                        "widget": "SystemEventLog"
                    },
                    {
                        "name": "alerts",
                        "text": "Alerts",
                        "widget": "AlertAll"
                    },
                    {
                        "name": "session",
                        "text": "All Sessions",
                        "widget": "SessionMonitoring"
                    }
                ]
            },
            {
                "name": "view",
                "text": "View",
                "widget": "View",
                "children": [
                    {
                        "name": "vs",
                        "text": "VS",
                        "widget": "ViewVS"
                    },
                    {
                        "name": "pool",
                        "text": "Pool",
                        "widget": "ViewPool"
                    },
                    {
                        "name": "member",
                        "text": "Member",
                        "widget": "ViewMember"
                    }
                ]
            }
        ]
    },
    "history": {
        "name": "history",
        "text": "Log & Report",
        "icon": "history",
        "children": [
            {
                "name": "log_browsing",
                "text": "Log Browsing",
                "widget": "HistoryLog"
            },
            {
                "name": "log_setting",
                "text": "Log Setting",
                "widget": "MultipleModulesConfig",
                "modules": [
                    {
                        "name": "local",
                        "text": "Local Log",
                        "gid": "539"
                    },
                    {
                        "name": "remote",
                        "text": "Syslog Server",
                        "gid": "547"
                    },
                    {
                        "name": "fast_stats",
                        "text": "Fast Stats",
                        "gid": "4510"
                    }
                ]
            },
            {
                "name": "report_email",
                "text": "Report Email",
                "gid": "5337"
            },
            {
                 "name": "report_config",
                 "text": "Report Config",
                 "widget": "MultipleModulesConfig",
                 "modules": [
                    {
                         "name": "report",
                         "text": "Report",
                         "gid": "1962"
                    },
                    {
                        "name": "report_queryset",
                        "text": "Query Set",
                        "gid": "2514"
                    },
                    {
                        "name": "fast_report",
                        "text": "Fast Report",
                        "gid": "4590"
                    }
                ]
            },
            {
                "name": "audit",
                "text": "Report",
                "widget": "HistoryReport"
            }
        ]
    }
}

let output = {};

for (var prop in rts) {
  console.log(`rts.${prop} = ${rts[prop]}`);
}

const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/other': 'Other'
};
export default routes;
