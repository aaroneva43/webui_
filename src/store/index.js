/* need refactor to seperate dev and prod */
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
///import { routerReducer } from 'react-router-redux';
//import DevTools from '../containers/devTools';


import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider, connect } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

import reducers from '../reducers';



const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const middleware = applyMiddleware(thunk, loggerMiddleware)

const getStore = () => {
  let store = createStore(reducers, middleware)
  return store
}

export default getStore
