import { CONFIG_ENTRY_ADD, CONFIG_ENTRY_EDIT, CONFIG_ENTRY_CLOSE, CONFIG_ENTRY_RESET } from '../actions/processTypes';

const cfgInitialState = {
    stackObjArray: [],
    modalShow: false
};

export default function operConfigEntry(state = cfgInitialState, action) {
    let obj = action.obj;
    let stackArray = state.stackObjArray;

    // switch(action.type) {
    // case CONFIG_ENTRY_ADD:

    //     if (typeof action.obj !== 'undefined'){
    //         obj.addView = true;
    //         stackArray.push(obj);

    //         return { stackObjArray: stackArray, modalShow: true };
    //     }

    // case CONFIG_ENTRY_RESET:
    //     return cfgInitialState;
    // }

    if (CONFIG_ENTRY_ADD === action.type) {
        if (typeof action.obj !== 'undefined')
        {
            obj.addView = true;
            stackArray.push(obj);

            return { stackObjArray: stackArray, modalShow: true };
        }
    }
    else if (CONFIG_ENTRY_EDIT === action.type) {
        if (typeof action.obj !== 'undefined')
        {
            obj.addView = false;
            stackArray.push(obj);

            return { stackObjArray: stackArray, modalShow: true };
        }
    }
    else if (CONFIG_ENTRY_CLOSE === action.type) {
        if (state.stackObjArray.length > 0) {
            let show = false;
            stackArray.pop();

            if (stackArray.length > 0) {
                show = true;
            }

            return { stackObjArray: stackArray, modalShow: show };
        }
    }
    else if (CONFIG_ENTRY_RESET === action.type) {
        return cfgInitialState;
    }

    return state;
    
}