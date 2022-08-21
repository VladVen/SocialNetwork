import {setAuthTC} from "./authReducer";

const setInitialize = 'app/SET_INITIALIZE'

export type initialStateType = {
    initialized: boolean
}
const initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case setInitialize:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

 type setupInitialize = {
    type: typeof setInitialize,
}
 const setupInitialize = (): setupInitialize => ({
    type: setInitialize,
})

export const runInitialize = () => {
    return (dispatch: any) => {
        let promise = dispatch(setAuthTC())
        promise.then(() => dispatch(setupInitialize()))
    }
}


export default appReducer