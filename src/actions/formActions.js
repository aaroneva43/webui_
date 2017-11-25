import request from 'superagent';
import * as types from './formTypes';

export function fetchGidNode(api_url) {
  return dispatch => {
    request
    .get(api_url)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        dispatch(loadFormFailure(err));
      } else {
        request
        .get('static/config_data/manual/gid_node.json')
        .set('Accept', 'application/json')
        .end((err, res2) => {
          if (err) {
            dispatch(loadFormFailure(err));
          } else {
            _.extend(res.body, res2.body);
            dispatch({
              type: types.fetch_GidNode,
              payload: res.body
            });
          }
        });
      }
    });
  }
}

export function fetchGidMacroMap(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_GidMacroMap,
            payload: res.body
          });
        }
      });
  }
}

export function fetchMacroGidMap(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_MacroGidMap,
            payload: res.body
          });
        }
      });
  }
}

export function setGidNodeMap(data) {
  return {
    type: types.SET_GID_NODE_MAP,
    payload: data
  };
}

export function setModuleInfo(data) {
  return {
    type: types.SET_MODULE_INFO,
    payload: data
  };
}

export function fetchMenu(api_url) {
  return dispatch => {
    ///dispatch(loadEventsRequest()); not needed?
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      //.set({'Authorization': 'Basic b25vczpyb2Nrcw==', 'Accept': 'application/json'})
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_Menu,
            payload: res.body
          });
        }
      });
  }
}

export function fetchMenuPieces(api_url) {
  return dispatch => {
    ///dispatch(loadEventsRequest()); not needed?
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      //.set({'Authorization': 'Basic b25vczpyb2Nrcw==', 'Accept': 'application/json'})
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_MenuPieces,
            payload: res.body
          });
        }
      });
  }
}

export function fetchTemplates(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_Templates,
            payload: res.body
          });
        }
      });
  }
}

export function fetchSpecifics(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_Specifics,
            payload: res.body
          });
        }
      });
  }
}


export function fetchMacroNameMap(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_MacroNameMap,
            payload: res.body
          });
        }
      });
  }
}

export function fetchModuleFieldsMap(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_ModuleFieldsMap,
            payload: res.body
          });
        }
      });
  }
}

export function fetchConditions(api_url) {
  return dispatch => {
    return request
      .get(api_url)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(loadFormFailure(err));
        } else {
          dispatch({
            type: types.fetch_Conditions,
            payload: res.body
          });
        }
      });
  }
}

export function loadFormFailure(error) {
  console.log('load form fail: ', error)
  return {
    type: types.LOAD_FORM_FAILURE,
    error
  };
}

export function addFormData(formName, cleanedDataArray) {
   //let formName = formName;
   console.log('addFormData action creator : ', formName, cleanedDataArray);
    return {
      type: types.add_FormData,
      payload: {formName, cleanedDataArray}
    }

}

export function fetchGrid() {
  console.log('hi')
  return {
    type: types.fetch_Grid,
    paylaod: newData
  }
}

export function deleteData(delRow, data) {

  const delRowSize = Object.keys(delRow).length;
  let newData = [];

  if (!delRow['mkey']) {

      let newArr = [];
      Object.keys(delRow).map(key => {
      let newobj = {};
        if (delRow[key] === true) {
          newobj['mkey'] = key
          newArr.push(newobj)
        }
      })

      newData = data.filter(item => {
        for( var i=0; i<newArr.length; i++) {
          if (newArr[i].mkey == item.mkey) {
            return false
          }
        }
        return true
      })

  } else {
      newData = data.filter(elem => {
        return elem.mkey !== delRow.mkey
    })
  }

  localStorage.setItem("data", JSON.stringify(newData));
  return {
      type: types.delete_Data,
      payload: newData
  }
}

// export function loadFormSuccess(payload) {
// console.log('load form success: ', payload)
//   return {
//     type: types.LOAD_FORM_SUCCESS,
//     payload
//   };
// }
