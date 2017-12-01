import { GET_CONFIG_DATA, GET_MENU } from './actionTypes'
import _ from 'lodash'

export const getConfigData = (url) => {

    if (_.isEmpty(url)) {
        const configDataDir = 'static/config_data/'

        url = [
            'manual/menu.json',
            'manual/menu_pieces.json',
            'manual/templates.json',
            'scanned/gid_node.json',
            'scanned/macro_gid.json',
            'scanned/macro_name.json',
            'scanned/module_fields.json',
            'scanned/conditions.json',
            'saved/Specifics.json',
            'scanned/gid_macro.json'

        ].map(itm => (configDataDir + itm))

    }
    
    return {
        type: GET_CONFIG_DATA,
        payload: _.castArray(url).map((itm) => {
            return {
                entry: handleConfigDataName(itm.split('/').pop().split('.').shift()), // use file name as entry name
                url: itm

            }
        })
    }
}

const handleConfigDataName = (name) => {
    if (['gid_node', 'menu_pieces'].includes(name)) {
        return name.split('_').map(itm => _.upperFirst(itm)).join('')
    }
    else if (name.indexOf('_') > -1) {
        return name.split('_').map(itm => _.upperFirst(itm)).join('') + 'Map'
    } else {
        return _.upperFirst(name)
    }

}