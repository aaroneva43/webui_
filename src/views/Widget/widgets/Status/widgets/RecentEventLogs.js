import React, {Component} from 'react';

class RecentEventLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Recent Event Logs
          <div className="card-actions">
            <a href><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="card-block">
          <table className="table table-sm">
            <tbody>
              <tr><td>2017-11-29</td><td>08:04:43</td><td>information</td><td>User admin login successfully from 172.30.16.2</td></tr>
              <tr><td>2017-11-29</td><td>08:04:14</td><td>notice</td><td>The log attack is rotated</td></tr>
              <tr><td>2017-11-29</td><td>08:03:58</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
              <tr><td>2017-11-29</td><td>08:02:41</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
              <tr><td>2017-11-29</td><td>08:02:31</td><td>notice</td><td>The log traffic is rotated</td></tr>
              <tr><td>2017-11-29</td><td>08:02:31</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
              <tr><td>2017-11-29</td><td>08:02:06</td><td>notice</td><td>The log attack is rotated</td></tr>
              <tr><td>2017-11-29</td><td>08:01:55</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
              <tr><td>2017-11-29</td><td>08:01:49</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
              <tr><td>2017-11-29</td><td>08:01:25</td><td>warning</td><td>CPU usage hit 95.00 percent</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default RecentEventLogs;
