import {
  SET_CONFIG_GID,
  SET_CUSTOM_GID,
  SET_CONFIG_WIDGET,
  FETCH_GRID_DATA,
  FETCH_GRID_FAILURE
} from '../actions/configTypes';

const initialState = {
  gid: null,
  customGid: null,
  widget: null,
  error: null,
  payload: {}
};

export default function gridReducers (state = initialState, action) {
  console.log('gridReducers action: =======> ', action.type)
  switch (action.type) {

    case SET_CONFIG_GID:
      return { ...state, gid: action.gid, widget: null };

    case SET_CUSTOM_GID:
      return { ...state, customGid: action.gid };

    case SET_CONFIG_WIDGET:
      return { ...state, widget: action.widget, gid: null };

    case FETCH_GRID_DATA:
      return { ...state, payload: action.payload };

    case FETCH_GRID_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
