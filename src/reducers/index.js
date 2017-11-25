import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import ConfigVars from './configReducers';
import ConfigData from './formReducers'; // formReducers
import ConfigModal from './modalReducers';
import operConfigEntry from './processReducers';

export default combineReducers({
  form,
  ConfigVars,
  ConfigData,
  ConfigModal,
  operConfigEntry
});