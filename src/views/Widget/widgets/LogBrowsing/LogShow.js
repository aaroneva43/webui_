const fields = {},
  filters = {},
  columnKeys = {};

columnKeys.history_log_config = ['date', 'time', 'pri', 'user', 'action', 'msg'];
fields.history_log_config = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  ui: {
    name: 'ui',
    type: 'ro',
    label: 'UI'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  cfgpath: {
    name: 'cfgpath',
    type: 'ro',
    label: 'Config Path'
  },
  cfgobj: {
    name: 'cfgobj',
    type: 'ro',
    label: 'Config Object'
  },
  cfgattr: {
    name: 'cfgattr',
    type: 'ro',
    label: 'Config Attribute'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_config = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  user: {
    "name": "user",
    "label": "User",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "add",
      "del",
      "edit",
      "move",
      "clear"
    ]
  }
};

columnKeys.history_log_admin = ['date', 'time', 'pri', 'user', 'action', 'status', 'msg', 'logdesc'];
fields.history_log_admin = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  ui: {
    name: 'ui',
    type: 'ro',
    label: 'UI'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  reason: {
    name: 'reason',
    type: 'ro',
    label: 'Reason'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_admin = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  user: {
    "name": "user",
    "label": "User",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "login",
      "logout"
    ]
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_system = ['date', 'time', 'pri', 'submod', 'user', 'action', 'status', 'msg', 'logdesc'];
fields.history_log_system = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  submod: {
    name: 'submod',
    type: 'ro',
    label: 'Submod'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  ui: {
    name: 'ui',
    type: 'ro',
    label: 'UI'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_system = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  submod: {
    "name": "submod",
    "label": "Submod",
    "type": "string",
    "choices": ["none", "log", "report", "ha", "update", "statistics"]
  },
  user: {
    "name": "user",
    "label": "User",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "none",
      "reboot",
      "shutdown",
      "reload",
      "backup",
      "factory_reset",
      "restore",
      "upgrade",
      "switch_mode",
      "download",
      "upload",
      "del_log",
      "update",
      "downgrade",
      "del_session",
      "bootup",
      "fips",
      "fips_self_test",
      "del_report",
      "rotate_log",
      "drop_log",
      "rebuild_logdb",
      "download_log",
      "unknown"
    ]
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_user = ['date', 'time', 'pri', 'user', 'usergrp', 'action', 'status', 'policy', 'logdesc'];
fields.history_log_user = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  usergrp: {
    name: 'usergrp',
    type: 'ro',
    label: 'User Group'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  reason: {
    name: 'reason',
    type: 'ro',
    label: 'Reason'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  }
};
filters.history_log_user = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  user: {
    "name": "user",
    "label": "User",
    "type": "string"
  },
  usergrp: {
    "name": "usergrp",
    "label": "User Group",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [{
      "value": "authenticaton",
      "label": "Authentication"
    }]
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
};

columnKeys.history_log_health_check = ['date', 'time', 'pri', 'module', 'policy', 'group', 'member', 'status', 'msg', 'logdesc'];
fields.history_log_health_check = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  module: {
    name: 'module',
    type: 'ro',
    label: 'Module'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  group: {
    name: 'group',
    type: 'ro',
    label: 'Group'
  },
  member: {
    name: 'member',
    type: 'ro',
    label: 'Member'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_health_check = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  group: {
    "name": "group",
    "label": "Group",
    "type": "string"
  },
  member: {
    "name": "member",
    "label": "Member",
    "type": "string"
  },
  module: {
    "name": "module",
    "label": "Module",
    "type": "string"
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  }
};

columnKeys.history_log_slb = ['date', 'time', 'pri', 'policy', 'group', 'member', 'status', 'msg', 'logdesc'];
fields.history_log_slb = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  group: {
    name: 'group',
    type: 'ro',
    label: 'Group'
  },
  member: {
    name: 'member',
    type: 'ro',
    label: 'Member'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
  group: {
    "name": "group",
    "label": "Group",
    "type": "string"
  },
  member: {
    "name": "member",
    "label": "Member",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_llb = ['date', 'time', 'pri', 'policy', 'group', 'member', 'status', 'msg', 'logdesc'];
fields.history_log_llb = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  group: {
    name: 'group',
    type: 'ro',
    label: 'Group'
  },
  member: {
    name: 'member',
    type: 'ro',
    label: 'Member'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_llb = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
  group: {
    "name": "group",
    "label": "Group",
    "type": "string"
  },
  member: {
    "name": "member",
    "label": "Member",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_dns = ['date', 'time', 'pri', 'policy', 'group', 'member', 'status', 'msg', 'logdesc'];
fields.history_log_dns = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  group: {
    name: 'group',
    type: 'ro',
    label: 'Group'
  },
  member: {
    name: 'member',
    type: 'ro',
    label: 'Member'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_dns = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
  group: {
    "name": "group",
    "label": "Group",
    "type": "string"
  },
  member: {
    "name": "member",
    "label": "Member",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_fw = ['date', 'time', 'pri', 'policy', 'group', 'member', 'status', 'msg', 'logdesc'];
fields.history_log_fw = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  group: {
    name: 'group',
    type: 'ro',
    label: 'Group'
  },
  member: {
    name: 'member',
    type: 'ro',
    label: 'Member'
  },
  status: {
    name: 'status',
    type: 'ro',
    label: 'Status'
  },
  logdesc: {
    name: 'logdesc',
    type: 'ro',
    label: 'Description'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_fw = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  pri: {
    "name": "pri",
    "label": "Log Level",
    "type": "string",
    "choices": ["emergency", "alert", "critical", "error", "warning", "notice", "information", "debug"]
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
  group: {
    "name": "group",
    "label": "Group",
    "type": "string"
  },
  member: {
    "name": "member",
    "label": "Member",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  status: {
    "name": "status",
    "label": "Status",
    "type": "string",
    "choices": ["none", "success", "failure"]
  }
};

columnKeys.history_log_waf = ['date', 'time', 'count', 'severity', 'src', 'dst', 'action'];
fields.history_log_waf = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  severity: {
    name: 'severity',
    type: 'ro',
    label: 'Severity'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'VS Name',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom',
    layout: {
      label: 'col-md-5',
      field: 'col-md-7'
    }
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  http_url: {
    name: 'http_url',
    type: 'ro',
    label: 'Http URL',
    layout: {
      label: 'col-md-4',
      field: 'col-md-8 word-wrap'
    }
  },
  http_host: {
    name: 'http_host',
    type: 'ro',
    label: 'Http Host'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message',
    layout: {
      label: 'col-md-4',
      field: 'col-md-8'
    }
  },
  pkt_hdr_info: {
    name: 'pkt_hdr_info',
    type: 'ro',
    label: 'Packet Header',
    layout: {
      label: 'col-md-4',
      field: 'col-md-8 word-wrap'
    }
  },
  http_method: {
    name: 'http_method',
    type: 'ro',
    label: 'Method'
  },
  user_agent: {
    name: 'user_agent',
    type: 'ro',
    label: 'User-Agent'
  },
};
filters.history_log_waf = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  severity: {
    "name": "severity",
    "label": "Severity",
    "type": "string"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "pass",
      "deny",
      "period_block",
      "redirect",
      "403_forbidden",
      "unknown"
    ]
  }
};

columnKeys.history_log_geo = ['date', 'time', 'count', 'severity', 'src', 'dst', 'action'];
fields.history_log_geo = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  count: {
    name: 'count',
    type: 'ro',
    label: 'Count'
  },
  severity: {
    name: 'severity',
    type: 'ro',
    label: 'Severity'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message',
    layout: {
      label: 'col-md-2',
      field: 'col-md-10'
    }
  }
};
filters.history_log_geo = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  severity: {
    "name": "severity",
    "label": "Severity",
    "type": "string"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "pass",
      "deny",
      "period_block",
      "redirect",
      "403_forbidden",
      "unknown"
    ]
  }
};

columnKeys.history_log_ip_reputation = columnKeys.history_log_synflood = ['date', 'time', 'count', 'severity', 'src', 'dst', 'action'];
fields.history_log_ip_reputation = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  count: {
    name: 'count',
    type: 'ro',
    label: 'Count'
  },
  severity: {
    name: 'severity',
    type: 'ro',
    label: 'Severity'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  }
};
filters.history_log_ip_reputation = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  severity: {
    "name": "severity",
    "label": "Severity",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "pass",
      "deny",
      "period_block",
      "redirect",
      "403_forbidden",
      "unknown"
    ]
  }
};
//history_log_synflood = DoS
fields.history_log_synflood = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  count: {
    name: 'count',
    type: 'ro',
    label: 'Count'
  },
  severity: {
    name: 'severity',
    type: 'ro',
    label: 'Severity'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_synflood = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  severity: {
    "name": "severity",
    "label": "Severity",
    "type": "string"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  action: {
    "name": "action",
    "label": "Action",
    "type": "string",
    "choices": [
      "pass",
      "deny",
      "period_block",
      "redirect",
      "403_forbidden",
      "unknown"
    ]
  }
};

columnKeys.history_log_slb_layer4 = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'policy', 'duration', 'trans_dst', 'real_server'];

fields.history_log_slb_layer4 = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  //itime deleted
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
};
filters.history_log_slb_layer4 = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  trans_dst: {
    "name": "trans_dst",
    "label": "Trans Destination",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_http = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'http_method', 'http_url', 'http_retcode', 'policy', 'real_server'];

fields.history_log_slb_http = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  http_method: {
    name: 'http_method',
    type: 'ro',
    label: 'Method'
  },
  http_host: {
    name: 'http_host',
    type: 'ro',
    label: 'Http Host'
  },
  http_agent: {
    name: 'http_agent',
    type: 'ro',
    label: 'User Agent'
  },
  http_url: {
    name: 'http_url',
    type: 'ro',
    label: 'URL',
    cell: 'truncated'
  },
  http_qry: {
    name: 'http_qry',
    type: 'ro',
    label: 'Http Query'
  },
  http_referer: {
    name: 'http_referer',
    type: 'ro',
    label: 'Http Referer'
  },
  http_cookie: {
    name: 'http_cookie',
    type: 'ro',
    label: 'Http Cookie'
  },
  http_retcode: {
    name: 'http_retcode',
    type: 'ro',
    label: 'Return Code'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  usrgrp: {
    name: 'usrgrp',
    type: 'ro',
    label: 'User Group'
  },
  auth_status: {
    name: 'auth_status',
    type: 'ro',
    label: 'Auth Status'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_http = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  http_method: {
    "name": "http_method",
    "label": "HTTP Method",
    "type": "string"
  },
  http_url: {
    "name": "http_url",
    "label": "HTTP URL",
    "type": "string"
  },
  http_retcode: {
    "name": "http_retcode",
    "label": "Return Code",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_sip = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'sip_method', 'sip_uri', 'sip_retcode', 'policy', 'real_server'];

fields.history_log_slb_sip = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  sip_method: {
    name: 'sip_method',
    type: 'ro',
    label: 'Method'
  },
  sip_uri: {
    name: 'sip_uri',
    type: 'ro',
    label: 'URI'
  },
  sip_retcode: {
    name: 'sip_retcode',
    type: 'ro',
    label: 'Return Code'
  },
  sip_from: {
    name: 'sip_from',
    type: 'ro',
    label: 'SIP From'
  },
  sip_to: {
    name: 'sip_to',
    type: 'ro',
    label: 'SIP To'
  },
  sip_callid: {
    name: 'sip_callid',
    type: 'ro',
    label: 'Call ID'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_sip = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  http_method: {
    "name": "http_method",
    "label": "HTTP Method",
    "type": "string"
  },
  http_url: {
    "name": "http_url",
    "label": "HTTP URL",
    "type": "string"
  },
  http_retcode: {
    "name": "http_retcode",
    "label": "Return Code",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};
//history_log_slb_dns2 = SLB DNS
columnKeys.history_log_slb_dns2 = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'policy', 'duration', 'trans_dst', 'real_server'];

fields.history_log_slb_dns2 = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },

  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  dns_req: {
    name: 'dns_req',
    type: 'ro',
    label: 'DNS Request'
  },
  dns_resp: {
    name: 'dns_resp',
    type: 'ro',
    label: 'DNS Response'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_dns2 = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  trans_dst: {
    "name": "trans_dst",
    "label": "Trans Destination",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_tcps = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'policy', 'duration', 'trans_dst', 'real_server'];

fields.history_log_slb_tcps = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },

  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_tcps = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  trans_dst: {
    "name": "trans_dst",
    "label": "Trans Destination",
    "type": "string"
  },
  vd: {
    "name": "vd",
    "label": "Vdom",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_rdp = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'policy', 'duration', 'trans_dst', 'real_server'];

fields.history_log_slb_rdp = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },

  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_rdp = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  trans_dst: {
    "name": "trans_dst",
    "label": "Trans Destination",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_radius = ['date', 'time', 'user', 'src', 'ibytes', 'dst', 'obytes', 'service', 'policy', 'duration', 'trans_dst', 'real_server'];

fields.history_log_slb_radius = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  user: {
    name: 'user',
    type: 'ro',
    label: 'User'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_radius = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },

  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  user: {
    "name": "user",
    "label": "User",
    "type": "string"
  },
  trans_dst: {
    "name": "trans_dst",
    "label": "Trans Destination",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },

};
//history_log_slb_dns = traffic_GLB
columnKeys.history_log_slb_dns = ['date', 'time', 'src', 'fqdn', 'resip', 'policy'];

fields.history_log_slb_dns = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  fqdn: {
    name: 'fqdn',
    type: 'ro',
    label: 'FQDN'
  },
  resip: {
    name: 'resip',
    type: 'ro',
    label: 'Resource IP'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_dns = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  fqdn: {
    "name": "fqdn",
    "label": "FQDN",
    "type": "string"
  },
  resip: {
    "name": "resip",
    "label": "Resource IP",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "Policy",
    "type": "string"
  },
};

columnKeys.history_log_slb_fw = ['date', 'time', 'ibytes', 'obytes', 'src', 'src_port', 'dst', 'dst_port', 'policy'];

fields.history_log_slb_fw = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },

  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Policy'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  nat_policy: {
    name: 'nat_policy',
    type: 'ro',
    label: 'NAT Policy'
  },
  llb_policy: {
    name: 'llb_policy',
    type: 'ro',
    label: 'LLB Policy'
  },
  link: {
    name: 'link',
    type: 'ro',
    label: 'Link'
  }
};

columnKeys.history_log_script_slb = ['date', 'time', 'obj_name', 'obj_value', 'name', 'value', 'msg'];
fields.history_log_script_slb = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  obj_name: {
    name: 'obj_name',
    type: 'ro',
    label: 'Object Name'
  },
  obj_value: {
    name: 'obj_value',
    type: 'ro',
    label: 'Object Value'
  },
  msg: {
    name: 'msg',
    type: 'ro',
    label: 'Message'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_script_slb = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  obj_name: {
    "name": "obj_name",
    "label": "Object Name",
    "type": "string"
  },
  obj_value: {
    "name": "obj_value",
    "label": "Object Value",
    "type": "string"
  },
  msg: {
    "name": "msg",
    "label": "Message",
    "type": "multi_selector"
  },
};

columnKeys.history_log_slb_rtsp = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'rtsp_method', 'rtsp_uri', 'rtsp_retcode', 'policy', 'real_server'];

fields.history_log_slb_rtsp = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  rtsp_method: {
    name: 'rtsp_method',
    type: 'ro',
    label: 'Method'
  },
  rtsp_sessionid: {
    name: 'rtsp_sessionid',
    type: 'ro',
    label: 'Session ID'
  },
  rtsp_info: {
    name: 'rtsp_info',
    type: 'ro',
    label: 'RSTP Info'
  },
  rtsp_uri: {
    name: 'rtsp_uri',
    type: 'ro',
    label: 'URI'
  },
  rtsp_retcode: {
    name: 'rtsp_retcode',
    type: 'ro',
    label: 'Return Code'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_rtsp = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  http_method: {
    "name": "http_method",
    "label": "HTTP Method",
    "type": "string"
  },
  http_url: {
    "name": "http_url",
    "label": "HTTP URL",
    "type": "string"
  },
  http_retcode: {
    "name": "http_retcode",
    "label": "Return Code",
    "type": "string"
  },
  vd: {
    "name": "vd",
    "label": "Vdom",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_smtp = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'smtp_cmd', 'smtp_subject', 'policy', 'real_server'];

fields.history_log_slb_smtp = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'priority',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  duration: {
    name: 'duration',
    type: 'ro',
    label: 'Duration (ms)'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  action: {
    name: 'action',
    type: 'ro',
    label: 'Action'
  },
  smtp_cmd: {
    name: 'smtp_cmd',
    type: 'ro',
    label: 'Command'
  },
  smtp_subject: {
    name: 'smtp_subject',
    type: 'ro',
    label: 'Subject'
  },
  smtp_from: {
    name: 'smtp_from',
    type: 'ro',
    label: 'SMTP From'
  },
  smtp_to: {
    name: 'smtp_to',
    type: 'ro',
    label: 'SMTP To'
  },
  smtp_cc: {
    name: 'smtp_cc',
    type: 'ro',
    label: 'SMTP CC'
  },
  smtp_attachname: {
    name: 'smtp_attachname',
    type: 'ro',
    label: 'Attach Name'
  },
  smtp_retcode: {
    name: 'smtp_retcode',
    type: 'ro',
    label: 'Return Code'
  },
  smtp_starttls: {
    name: 'smtp_starttls',
    type: 'ro',
    label: 'Start'
  },
  smtp_bodylen: {
    name: 'smtp_bodylen',
    type: 'ro',
    label: 'Body'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  }
};
filters.history_log_slb_smtp = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },

  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  smtp_cmd: {
    "name": "smtp_cmd",
    "label": "Command",
    "type": "string"
  },
  smtp_subject: {
    "name": "smtp_subject",
    "label": "SMTP Subject",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "VS",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  },
};

columnKeys.history_log_slb_rtmp = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'rtmp_cmd', 'rtmp_tc_url', 'rtmp_return_code', 'rtmp_stream_name', 'policy', 'real_server'];

fields.history_log_slb_rtmp = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  rtmp_cmd: {
    name: 'rtmp_cmd',
    type: 'ro',
    label: 'Command'
  },
  rtmp_tc_url: {
    name: 'rtmp_tc_url',
    type: 'ro',
    label: 'TC URL'
  },
  rtmp_return_code: {
    name: 'rtmp_return_code',
    type: 'ro',
    label: 'Return Code'
  },
  rtmp_stream_name: {
    name: 'rtmp_stream_name',
    type: 'ro',
    label: 'Stream Name'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
};
filters.history_log_slb_rtmp = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  rtmp_cmd: {
    "name": "rtmp_cmd",
    "label": "Command",
    "type": "string"
  },
  rtmp_tc_url: {
    "name": "rtmp_tc_url",
    "label": "TC URL",
    "type": "string"
  },
  rtmp_return_code: {
    "name": "rtmp_return_code",
    "label": "Return Code",
    "type": "string"
  },
  rtmp_stream_name: {
    "name": "rtmp_stream_name",
    "label": "Stream Name",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "Virtual Server",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  }
};

columnKeys.history_log_slb_diameter = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'dm_cmdcode', 'dm_appid', 'dm_e2eid', 'dm_orihost', 'dm_orirealm', 'dm_desthost', 'dm_destrealm', 'dm_sessionid', 'dm_retcode', 'policy', 'real_server'];

fields.history_log_slb_diameter = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  dm_cmdcode: {
    name: 'dm_cmdcode',
    type: 'ro',
    label: 'Command'
  },
  dm_appid: {
    name: 'dm_appid',
    type: 'ro',
    label: 'App ID'
  },
  dm_e2eid: {
    name: 'dm_e2eid',
    type: 'ro',
    label: 'E2E ID'
  },
  dm_orihost: {
    name: 'dm_orihost',
    type: 'ro',
    label: 'Origin Host'
  },
  dm_orirealm: {
    name: 'dm_orirealm',
    type: 'ro',
    label: 'Origin Realm'
  },
  dm_desthost: {
    name: 'dm_desthost',
    type: 'ro',
    label: 'Destination Host'
  },
  dm_destrealm: {
    name: 'dm_destrealm',
    type: 'ro',
    label: 'Destination Realm'
  },
  dm_sessionid: {
    name: 'dm_sessionid',
    type: 'ro',
    label: 'Session ID'
  },
  dm_retcode: {
    name: 'dm_retcode',
    type: 'ro',
    label: 'Return Code'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
};
filters.history_log_slb_diameter = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  dm_cmdcode: {
    "name": "dm_cmdcode",
    "type": "string",
    "label": "Command"
  },
  dm_appid: {
    "name": "dm_appid",
    "type": "string",
    "label": "App ID"
  },
  dm_e2eid: {
    "name": "dm_e2eid",
    "type": "string",
    "label": "E2E ID"
  },
  dm_orihost: {
    "name": "dm_orihost",
    "type": "string",
    "label": "Origin Host"
  },
  dm_orirealm: {
    "name": "dm_orirealm",
    "type": "string",
    "label": "Origin Realm"
  },
  dm_desthost: {
    "name": "dm_desthost",
    "type": "string",
    "label": "Destination Host"
  },
  dm_destrealm: {
    "name": "dm_destrealm",
    "type": "string",
    "label": "Destination Realm"
  },
  dm_sessionid: {
    "name": "dm_sessionid",
    "type": "string",
    "label": "Session ID"
  },
  dm_retcode: {
    "name": "dm_retcode",
    "type": "string",
    "label": "Return Code"
  },
  policy: {
    "name": "policy",
    "label": "Virtual Server",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  }
};

columnKeys.history_log_slb_mysql = ['date', 'time', 'src', 'ibytes', 'dst', 'obytes', 'service', 'mysql_action', 'mysql_return_code', 'mysql_group_id', 'mysql_sql', 'policy', 'real_server'];

fields.history_log_slb_mysql = {
  date: {
    name: 'date',
    type: 'ro',
    label: 'Date'
  },
  time: {
    name: 'time',
    type: 'ro',
    label: 'Time'
  },
  src: {
    name: 'src',
    type: 'ro',
    label: 'Source',
    cell: 'IP-country',
    IPType: 'src'
  },
  ibytes: {
    name: 'ibytes',
    type: 'ro',
    label: 'Received Bytes'
  },
  dst: {
    name: 'dst',
    type: 'ro',
    label: 'Destination',
    cell: 'IP-country',
    IPType: 'dst'
  },
  obytes: {
    name: 'obytes',
    type: 'ro',
    label: 'Sent Bytes'
  },
  service: {
    name: 'service',
    type: 'ro',
    label: 'Service'
  },
  mysql_action: {
    name: 'mysql_action',
    type: 'ro',
    label: 'Mysql Action'
  },
  mysql_return_code: {
    name: 'mysql_return_code',
    type: 'ro',
    label: 'Return Code'
  },
  mysql_group_id: {
    name: 'mysql_group_id',
    type: 'ro',
    label: 'Group Id'
  },
  mysql_sql: {
    name: 'mysql_sql',
    type: 'ro',
    label: 'SQL'
  },
  src_port: {
    name: 'src_port',
    type: 'ro',
    label: 'Source Port'
  },
  dst_port: {
    name: 'dst_port',
    type: 'ro',
    label: 'Destination Port'
  },
  trans_src: {
    name: 'trans_src',
    type: 'ro',
    label: 'Trans Source'
  },
  trans_src_port: {
    name: 'trans_src_port',
    type: 'ro',
    label: 'Trans Source Port'
  },
  trans_dst: {
    name: 'trans_dst',
    type: 'ro',
    label: 'Trans Destination'
  },
  trans_dst_port: {
    name: 'trans_dst_port',
    type: 'ro',
    label: 'Trans Destination Port'
  },
  policy: {
    name: 'policy',
    type: 'ro',
    label: 'Virtual Server'
  },
  real_server: {
    name: 'real_server',
    type: 'ro',
    label: 'Real Server Name'
  },
  log_id: {
    name: 'log_id',
    type: 'ro',
    label: 'Log ID'
  },
  pri: {
    name: 'pri',
    type: 'ro',
    label: 'Log Level'
  },
  msg_id: {
    name: 'msg_id',
    type: 'ro',
    label: 'Message ID'
  },
  srccountry: {
    name: 'srccountry',
    type: 'ro',
    label: 'Source Country'
  },
  dstcountry: {
    name: 'dstcountry',
    type: 'ro',
    label: 'Destination Country'
  },
  type: {
    name: 'type',
    type: 'ro',
    label: 'Type'
  },
  subtype: {
    name: 'subtype',
    type: 'ro',
    label: 'Sub Type'
  },
  vd: {
    name: 'vd',
    type: 'ro',
    label: 'Vdom'
  },
  proto: {
    name: 'proto',
    type: 'ro',
    label: 'Protocol'
  },
  mysql_transid: {
    name: 'mysql_transid',
    type: 'ro',
    label: 'MySQL Trans Id'
  },
};
filters.history_log_slb_mysql = {
  date: {
    "name": "date",
    "label": "Date",
    "type": "date"
  },
  time: {
    "name": "time",
    "label": "Time",
    "type": "time"
  },
  src: {
    "name": "src",
    "label": "Source",
    "type": "string"
  },
  dst: {
    "name": "dst",
    "label": "Destination",
    "type": "string"
  },
  service: {
    "name": "service",
    "label": "Service",
    "type": "string",
    "choices": ["http", "https", "tcps", "tcp", "udp", "ftp", "radius", "rdp", "unknown"]
  },
  mysql_action: {
    "name": "mysql_action",
    "label": "Mysql Action",
    "type": "string"
  },
  mysql_return_code: {
    "name": "mysql_return_code",
    "label": "Return Code",
    "type": "string"
  },
  mysql_group_id: {
    "name": "mysql_group_id",
    "label": "Group Id",
    "type": "string"
  },
  mysql_sql: {
    "name": "mysql_sql",
    "label": "SQL",
    "type": "string"
  },
  policy: {
    "name": "policy",
    "label": "Virtual Server",
    "type": "string"
  },
  real_server: {
    "name": "real_server",
    "label": "Real Server Name",
    "type": "string"
  }
};

export { fields, filters, columnKeys };
