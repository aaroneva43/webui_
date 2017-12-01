import React, {Component} from 'react';
import SystemInfo from './widgets/SystemInfo';
import CPU from './widgets/CPU';
import Disk from './widgets/Disk';
import HAInfo from './widgets/HAInfo';
import RAM from './widgets/RAM';
import LicenseInfo from './widgets/LicenseInfo';
import RecentEventLogs from './widgets/RecentEventLogs';
import VSThroughput from './widgets/VSThroughput';
import InterfaceThroughput from './widgets/InterfaceThroughput';
import VSConnections from './widgets/VSConnections';
import './Status.scss';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col">
            <SystemInfo />
            <HAInfo />
            <VSThroughput />
            <InterfaceThroughput />
            <LicenseInfo />
          </div>
          <div className="col">
            <CPU />
            <RAM />
            <Disk />
            <VSConnections />
            <RecentEventLogs />
          </div>
        </div>
      </div>
    )
  }
}

export default Status;
