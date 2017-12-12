import React, {Component} from 'react';
import FormContainer from '../../../../components/Form/FormContainer';

class SystemSettingsMaintenance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: 65
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

export default SystemSettingsMaintenance;