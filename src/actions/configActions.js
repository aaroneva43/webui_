import request from 'superagent';
import * as types from './configTypes';


export function setConfigGID(gid) {
  console.log('set config gid: ', gid)
  return {
    type: types.SET_CONFIG_GID,
    gid
  };
}

export function setCustomGID(gid) {
  console.log('set custom gid: ', gid)
  return {
    type: types.SET_CUSTOM_GID,
    gid
  };
}

export function setConfigWidget(widget) {
  console.log('set config widget: ', widget)
  return {
    type: types.SET_CONFIG_WIDGET,
    widget
  };
}

export function fetchGrid(api_url) {
  return dispatch => {
  ///dispatch(loadEventsRequest()); not needed?
    return request
    .get(api_url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        dispatch(fetchGridFailure(err));
      } else {
        console.log('grid data ==::: ', res);
        dispatch({
          type: types.FETCH_GRID_DATA,
          payload: res.body
        });
      }
    });
  }
}

export function fetchGridFailure(error) {
  console.log('load grid fail: ', error)
  return {
    type: types.FETCH_GRID_FAILURE,
    error
  };
}
