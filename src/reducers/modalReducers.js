import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_HELPER,
  CLOSE_HELPER
} from '../actions/modalTypes';

const initialState = { modal: {}, modalform: {} }

export default function modalReducers (state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return { ...state, modal: action.payload };
    case CLOSE_MODAL:
      return { ...state, modal: action.payload };
    case OPEN_HELPER:
      return { ...state, modalform: action.payload };
    case CLOSE_HELPER:
      return { ...state, modalform: action.payload };
  }
      return state;
}