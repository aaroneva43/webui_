import React, {Component} from 'react';
import FormContainer from '../../../../components/Form/FormContainer';

class SystemSettingsFortiGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: 260
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

export default SystemSettingsFortiGuard;
