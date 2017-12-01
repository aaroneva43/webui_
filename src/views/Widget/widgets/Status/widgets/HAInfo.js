import React, {Component} from 'react';

class HAInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          HA Information
          <div className="card-actions">
            <a href><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="card-block">
          <dl className="dl-horizontal">
            <dt>Group ID:</dt>
            <dd>group_id</dd>

            <dt>Mode:</dt>
            <dd>mode</dd>

            <dt>Cluster Members:</dt>
            <dd>local_sn local_state</dd>
            <dd>peer_sn peer_state</dd>

            <dt>Config Sync:</dt>
            <dd>cfg_sync_state <button type="button" className="btn btn-primary btn-sm pull-right">Details</button></dd>

            <dt>Last Changed Time:</dt>
            <dd>last_changed_status_time</dd>

            <dt>Last Changed Reason:</dt>
            <dd>last_changed_status_reason</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default HAInfo;
