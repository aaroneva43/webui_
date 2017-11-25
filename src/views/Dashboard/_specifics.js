const specifics = {

"2841": {
    "columns": [
      {
        "name": "mkey",
        "label": "Name",
        "cell": "string",
        "header": "string"
      },
      {
        "name": "server-type",
        "label": "Type",
        "cell": "value-label-mapping",
        "cellOptions": {
          "mapping": {
            "FortiADC-SLB": "FortiADC SLB",
            "Generic-Host": "Generic Host"
          }
        },
        "header": "string"
      },
      {
        "name": "data-center",
        "label": "Data Center",
        "cell": "string",
        "header": "string"
      },
      {
        "name": "server_member_count",
        "label": "Member Count",
        "cell": "string",
        "header": "string"
      }
    ],
    "editors": {
      "excluded_fields": [
        "server_member_count"
      ],
      "mkey": {
        "label": "Name",
        "placeholder": "Required config name. No spaces."
      },
      "server-type": {
        "label": "Type",
        "buttongroup": true,
        "options": {
          "data": [
            {
              "value": "FortiADC-SLB",
              "label": "FortiADC SLB"
            },
            {
              "value": "Generic-Host",
              "label": "Generic Host"
            }
          ],
          "inline": true
        }
      },
      "sync-status": {
        "label": "Synchronization"
      },
      "address-type": {
        "label": "Address Type",
        "buttongroup": true,
        "options": {
          "data": [
            {
              "value": "ipv4",
              "label": "IPv4"
            },
            {
              "value": "ipv6",
              "label": "IPv6"
            }
          ],
          "inline": true
        }
      },
      "ip": {
        "label": "IP Address",
        "placeholder": "Required. Specify the IP address.",
        "help": "Example: 192.0.2.1"
      },
      "ip6": {
        "label": "IPv6 Address",
        "placeholder": "Required. Specify the IP address.",
        "help": "Example: 2001:db8::1"
      },
      "data-center": {
        "label": "Data Center",
        "create": {
          "name": "Create New",
          "gid": 2836
        }
      },
      "health_check_ctrl": {
        "label": "Health Check Control"
      },
      "health_check_relationship": {
        "label": "Health Check Relationship"
      },
      "health_check_list": {
        "label": "Health Check List",
        "create": {
          "name": "Create New",
          "gid": 2763
        }
      }
    }
  }

}

const formJson = {
        'type':'object',
        'definitions': {
            'address': {
                'type': 'object',
                'properties': {
                    'street_address': {
                        'type': 'string'
                    },
                    'city': {
                        'type': 'string'
                    },
                    'state': {
                        'type': 'string'
                    }
                },
                'required': [
                    'street_address',
                    'city',
                    'state'
                ]
            }
        },
        'properties': {
            'title': { 'type':'string', 'title': 'Title' },
            'type': { 'enum':[ 'One','Two' ], 'type':'string', 'title': 'Select a type' },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms' }
        }
    }

export default formJson;