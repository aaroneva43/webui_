import React, {Component} from 'react';
import Form2 from './Form2';
import { getModuleInfo } from '../../services/Data';
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../actions/processActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store
  };
})

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }  

  render() {

    let moduleInfo = getModuleInfo(this.props.gid, this.props.store.ConfigData);

    return (
      <div className="widget">
        <Form2 gid={ this.props.gid } moduleInfo={moduleInfo} />
      </div>
    );
  }
}

export default FormContainer;