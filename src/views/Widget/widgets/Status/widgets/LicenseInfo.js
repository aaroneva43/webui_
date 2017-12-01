import React, {Component} from 'react';

class LicenseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          License Information
          <div className="card-actions">
            <a href><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="card-block">
          <dl className="dl-horizontal">
            <dt>License Status</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              licenseStatus
              <button type="button" className="btn btn-primary btn-sm pull-right">Update</button>
            </dd>

            <dt>Registration</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.registration (Login ID: fortiguard.loginId)
              <button type="button" className="btn btn-primary btn-sm pull-right">Login</button>
            </dd>

            <dt>Hardware Support</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.HDWR.support_level fortiguard.HDWR.expire
            </dd>

            <dt>Firmware Support</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.FMWR.support_level fortiguard.FMWR.expire
            </dd>

            <dt>Enhanced Support</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.ENHN.support_level fortiguard.ENHN.expire
            </dd>

            <dt>Comprehensive Support</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.COMP.support_level fortiguard.COMP.expire
            </dd>

            <dt>Web Application Firewall</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              Version: fortiguard.ADDB.version fortiguard.ADDB.expire
            </dd>

            <dt>IP Reputation</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              Version: fortiguard.IRDB.version fortiguard.IRDB.expire
            </dd>

            <dt>Web Filtering Support</dt>
            <dd>
              <i className="fa fa-question-circle"></i>
              fortiguard.FURL.string
              <button type="button" className="btn btn-primary btn-sm pull-right">Configure</button>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default LicenseInfo;
