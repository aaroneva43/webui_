import React, { Component } from 'react';
import './DevicePorts.scss';

class DevicePorts extends Component {
  render() {
    return (
      <div className="device-ports table">
        <div className="table-body">
          <div className="table-row">
            <div className="table-cell">
              <div className="interval"></div>
            </div>
            <div className="table-cell">
              <div className="port">1</div>
              <div className="icon up"></div>
            </div>
            <div className="table-cell">
              <div className="port">2</div>
              <div className="icon up"></div>
            </div>
            <div className="table-cell">
              <div className="port">3</div>
              <div className="icon up"></div>
            </div>
            <div className="table-cell">
              <div className="port">4</div>
              <div className="icon up"></div>
            </div>
            <div className="table-cell">
              <div className="port">5</div>
              <div className="icon up"></div>
            </div>
            <div className="table-cell">
              <div className="interval"></div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <div className="interval"></div>
            </div>
            <div className="table-cell">
              <div className="icon up"></div>
              <div className="port">6</div>
            </div>
            <div className="table-cell">
              <div className="icon up"></div>
              <div className="port">7</div>
            </div>
            <div className="table-cell">
              <div className="icon up"></div>
              <div className="port">8</div>
            </div>
            <div className="table-cell">
              <div className="icon up"></div>
              <div className="port">9</div>
            </div>
            <div className="table-cell">
              <div className="icon up"></div>
              <div className="port">10</div>
            </div>
            <div className="table-cell">
              <div className="interval"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DevicePorts;
