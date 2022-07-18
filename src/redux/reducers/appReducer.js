import {setAuthTC} from "./authReducer";

let actionType = {
    setInitialize: 'app/SET_INITIALIZE'
}

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionType.setInitialize):
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }

}

export const setupInitialize = () => ({
    type: actionType.setInitialize,
})

export const runInitialize = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthTC())
        promise.then(() => dispatch(setupInitialize()))
    }
}


export default appReducer