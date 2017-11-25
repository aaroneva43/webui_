import React, {Component} from 'react';
import Grid from '../../../views/Grid/';
import DevicePorts from '../../../components/DevicePorts/';

class NetworkingInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: 1
    };
  }

  render() {
    return (
      <div className="widget">
        <DevicePorts />
        <Grid gid={ this.state.gid } />
      </div>
    );
  }
}

export default NetworkingInterface;
