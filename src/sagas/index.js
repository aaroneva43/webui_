import { takeEvery } from 'redux-saga/effects'
import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects'
import cookie from 'js-cookie'

import { SUCCESS, FAILURE, PENDING, LOGIN, AUTH, GET_CONFIG_DATA } from '../actions/actionTypes'

import api from '../api'

import _ from 'lodash'

import { generateMenuData, extendNode } from '../services/Data';



export default function* sagas() {

    // // LOGIN
    // yield takeEvery(LOGIN, function* (action) {
    //     try {
    //         put({ type: `${LOGIN}/${PENDING}` })

    //         const { username, password } = action.payload

    //         const res = yield call(api.login, { username: username, password: password })

    //         if (res.success == true) {
    //             cookie.set('token', res.result.token)
    //             yield put({ type: `${LOGIN}/${SUCCESS}` })

    //         } else {
    //             yield put({ type: `${LOGIN}/${FAILURE}` })

    //         }

    //     } catch (e) {
    //         yield put({
    //             type: `${LOGIN}/${FAILURE}`,
    //             error: e
    //         })

    //     }

    // })

    // // AUTH
    // yield takeEvery(AUTH, function* (action) {
    //     try {
    //         put({ type: `${AUTH}` })

    //         const res = yield call(api.auth, { token: cookie.get('token') })

    //         if (res.success == true) {

    //             // cookie.set('token', res.result)

    //             yield put({ type: `${AUTH}/${SUCCESS}`, payload: { token: res.result.token } })

    //         } else {
    //             yield put({ type: `${AUTH}/${FAILURE}`, payload: res.result.message })

    //         }


    //     } catch (e) {
    //         yield put({ type: `${AUTH}/${FAILURE}`, payload: e })
    //     }
    // })

    // GET config data

    yield takeEvery(GET_CONFIG_DATA, function* (action) {
        try {
            put({ type: `${GET_CONFIG_DATA}` })

            let configData = {}
            action.payload = _.castArray(action.payload)

            for (let i = 0; i < action.payload.length; i++) {
                let itm = action.payload[i]

                let res = yield call(api.getConfigData, { url: itm.url })
                configData[itm.entry] = res.result
            }

            // generate gid_node_local
            const { GidNode, MacroGidMap, MacroNameMap, ModuleFieldsMap, Conditions } = configData

            if (GidNode && MacroGidMap && MacroNameMap && ModuleFieldsMap && Conditions) {

                configData['GidNodeMap'] = yield call(extendNode, GidNode, MacroGidMap, MacroNameMap, ModuleFieldsMap, Conditions)

            }

            // generate menu_data
            if (configData.Menu && configData.MenuPieces) {
                configData['MenuData'] = generateMenuData(configData.Menu, configData.MenuPieces)

            }

            // set localStorage
            if (!localStorage.DBPanelsShow) {
                localStorage.setItem("DBPanelsShow", JSON.stringify({current: 'Main', dbs: {Main: ['SystemInfo', 'HAInfo', 'VSThroughput', 'InterfaceThroughput', 'LicenseInfo', 'CPU', 'Disk', 'RAM', 'VSConnections', 'RecentEventLogs']}}));
            }

            window.cD = configData // debug TOBEREMOVED

            yield put({ type: `${GET_CONFIG_DATA}/${SUCCESS}`, payload: configData })






        } catch (e) {
            yield put({ type: `${GET_CONFIG_DATA}/${FAILURE}`, payload: e })
        }
    })
}