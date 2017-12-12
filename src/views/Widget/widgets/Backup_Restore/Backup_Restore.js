import React, {Component} from 'react';
import FormContainer from '../../../../components/Form/FormContainer';

class SystemSettingsDependents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: 305
    };
  }  

  render() {

    return (
      <div className="widget">
        <FormContainer gid={ this.state.gid } />
      </div>
    );
  }
}

export default SystemSettingsDependents;