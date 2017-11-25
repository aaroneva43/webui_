import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { fetchGidMacroMap, fetchMacroGidMap, fetchMenu, fetchMenuPieces, fetchSpecifics, fetchGidNode, fetchGidNodeMap, fetchMacroNameMap, fetchModuleFieldsMap, fetchConditions, fetchTemplates } from './actions/formActions';

/// redux addition
import { Provider } from 'react-redux';
import getStore from './store';



// Styles
// import 'bootstrap/dist/css/bootstrap.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

const history = createBrowserHistory();

const store = getStore()

// load data
store.dispatch(fetchGidNode('./static/config_data/scanned/gid_node.json'));
store.dispatch(fetchMacroGidMap('./static/config_data/scanned/macro_gid.json'));
store.dispatch(fetchMacroNameMap('./static/config_data/scanned/macro_name.json'));
store.dispatch(fetchModuleFieldsMap('./static/config_data/scanned/module_fields.json'));
store.dispatch(fetchConditions('./static/config_data/scanned/conditions.json'));
store.dispatch(fetchSpecifics('./static/config_data/saved/Specifics.json'));
store.dispatch(fetchGidMacroMap('./static/config_data/scanned/gid_macro.json'));
store.dispatch(fetchMenu('./static/config_data/manual/menu.json'));
store.dispatch(fetchMenuPieces('./static/config_data/manual/menu_pieces.json'));
store.dispatch(fetchTemplates('./static/config_data/manual/templates.json'));

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={Full} />
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
