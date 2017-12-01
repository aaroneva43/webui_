// import {
//   SET_GID_NODE_MAP,
//   SET_MODULE_INFO,
//   fetch_GidNode,
//   fetch_MacroGidMap,
//   fetch_MacroNameMap,
//   fetch_GidMacroMap,
//   fetch_Menu,
//   fetch_MenuPieces,
//   fetch_Templates,
//   fetch_Specifics,
//   fetch_ModuleFieldsMap,
//   fetch_Conditions,
//   LOAD_FORM_FAILURE,
//   add_FormData,
//   delete_Data
// } from '../actions/formTypes';

import { PENDING, SUCCESS, FAILURE, GET_CONFIG_DATA } from '../actions/actionTypes'
import reducerGenerator from './reducerGenerator'

const initialState = {
  error: null,
  GidNode: {},
  GidNodeMap: {},
  MacroGidMap: {},
  MacroNameMap: {},
  GidMacroMap: {},
  Specifics: {},
  Menu: {},
  MenuPieces: {},
  Templates: {},
  WidgetForm: {},
  ModuleFieldsMap: {},
  Conditions: {},
  ModuleInfo: {},
  formId: null,
  data: []
}

export default reducerGenerator([GET_CONFIG_DATA], initialState, {
  [GET_CONFIG_DATA]: (state, action) => {
    return {
      ...state
    }
  },
  [`${GET_CONFIG_DATA}/${SUCCESS}`]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [`${GET_CONFIG_DATA}/${FAILURE}`]: (state, action) => {
    return {
      ...state
    }
  }
})

// export default function formReducers(state = initialState, action) {
//   switch (action.type) {

//     case fetch_GidNode:
//     return { ...state,
//       GidNode: action.payload
//     };

//     case SET_GID_NODE_MAP:
//     return { ...state,
//       GidNodeMap: action.payload
//     };

//     case SET_MODULE_INFO:
//     return { ...state,
//       ModuleInfo: action.payload
//     };

//     case fetch_MacroGidMap:
//     return { ...state,
//       MacroGidMap: action.payload
//     };

//     case fetch_MacroNameMap:
//     return { ...state,
//       MacroNameMap: action.payload
//     };

//     case fetch_GidMacroMap:
//       return { ...state,
//         GidMacroMap: action.payload
//       };

//     case fetch_Specifics:
//       return { ...state,
//         Specifics: action.payload
//       };

//     case fetch_Menu:
//       return { ...state,
//         Menu: action.payload
//       };

//     case fetch_MenuPieces:
//       return { ...state,
//         MenuPieces: action.payload
//       };

//     case fetch_Templates:
//       return { ...state,
//         Templates: action.payload
//       };
// case fetch_WidgetForm:
//     return { ...state,
//        WidgetForm: action.payload
//      };

//     case fetch_ModuleFieldsMap:
//       return { ...state,
//         ModuleFieldsMap: action.payload
//       };

//     case fetch_Conditions:
//       return { ...state,
//         Conditions: action.payload
//       };

//     case LOAD_FORM_FAILURE:
//       return { ...state,
//         error: action.error
//       };

//     case add_FormData:
//       return { ...state,
//         formId: action.payload.formName,
//         data: action.payload.cleanedDataArray
//       };

//     case delete_Data:
//       return { ...state,
//         data: action.payload
//       };

//     default:
//       return state;
//   }
// }
