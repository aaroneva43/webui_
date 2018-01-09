import React, {Component} from 'react';
import SweetAlert from 'sweetalert2-react';

class SystemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateAlert: false,
      showEnableAlert: false
    };
  }

  handleClose() {
    this.props.close('SystemInfo');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          System Information
          <div className="card-actions">
            <button type="button" className="btn btn-link" onClick={ this.handleClose.bind(this) }><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="card-block">
          <dl className="dl-horizontal">
            <dt>Host Name:</dt>
            <dd>FortiWAN-VM</dd>

            <dt>Current Time:</dt>
            <dd>Tue Nov 28 12:39:23 2017</dd>

            <dt>System Uptime:</dt>
            <dd>0d, 0h, 48m, 29s</dd>

            <dt>Serial Number:</dt>
            <dd>FWNVM3A17000053</dd>

            <dt>Firmware Version:</dt>
            <dd>FortiWAN-VM v1.1.0,build0001,171214 <button type="button" className="btn btn-primary btn-sm pull-right" onClick={ () => this.setState({ showUpdateAlert: true }) }>Update</button></dd>

            <dt>Virtual Domain:</dt>
            <dd>Virtual Domain Disabled <button type="button" className="btn btn-primary btn-sm pull-right" onClick={ () => this.setState({ showEnableAlert: true }) }>Enable</button></dd>
          </dl>
        </div>

        <SweetAlert
          show={this.state.showEnableAlert}
          text='Are you sure you want to enable virtual domain?'
          showCancelButton
          onConfirm={() => { this.setState({ showEnableAlert: false }) }}
          onCancel={() => { this.setState({ showEnableAlert: false }) }}
        />

        <SweetAlert
          show={this.state.showUpdateAlert}
          html={`
            <form class="update-firmware-form">
              <div class="form-group">
                <label>HA Sync</label>
                <div>
                  <label class="switch switch-lg">
                    <input type="checkbox" name="content-routing" value="false" helper="[object Object]" valuefield="value">
                    <em></em>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label>Firmware File</label>
                <input type="file" class="form-control-file" placeholder="" value="">
                <i class="glyphicon glyphicon-upload"></i>
                <i class="glyphicon glyphicon-remove-circle"></i>
              </div>
            </form>
          `}
          showCancelButton
          onConfirm={() => { this.setState({ showUpdateAlert: false }) }}
          onCancel={() => { this.setState({ showUpdateAlert: false }) }}
        />
      </div>
    )
  }
}

export default SystemInfo;
