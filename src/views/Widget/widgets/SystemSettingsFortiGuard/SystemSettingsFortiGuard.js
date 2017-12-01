import React, {Component} from 'react';
import Form2 from '../../../../components/Form/Form2';
import { getModuleInfo } from '../../../../services/Data';
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../../../actions/processActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store
  };
})

class SystemSettingsFortiGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: 260
    };
  }

  render() {

    let moduleInfo = getModuleInfo(this.state.gid, this.props.store.ConfigData);

    return (
      <div className="widget">
        <Form2 gid={ this.state.gid } moduleInfo={moduleInfo} />
      </div>
    );
  }
}

export default SystemSettingsFortiGuard;
