import React from 'react';
import ReactDOM from 'react-dom'
import { Router, HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { fetchGidMacroMap, fetchMacroGidMap, fetchMenu, fetchMenuPieces, fetchSpecifics, fetchGidNode, fetchGidNodeMap, fetchMacroNameMap, fetchModuleFieldsMap, fetchConditions, fetchTemplates } from './actions/formActions'


import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider, connect } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import reducers from './reducers'

import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'




import routes from './routes'
import { getConfigData } from './actions/configData'



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

// middlewares
const history = createHistory({ basename: '/' })
const sagaMiddleware = createSagaMiddleware()
const middleware = [routerMiddleware(history), sagaMiddleware]

// support redux-dev-tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))

sagaMiddleware.run(sagas)

store.dispatch(getConfigData())

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" name="Home" component={Full} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
