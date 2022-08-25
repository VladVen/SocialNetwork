import {setAuthTC} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reduxStore";

const setInitialize = 'app/SET_INITIALIZE'

export type initialStateType = {
    initialized: boolean
}
const initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
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
type ActionsType = setupInitialize

 type setupInitialize = {
    type: typeof setInitialize,
}
 const setupInitialize = (): setupInitialize => ({
    type: setInitialize,
})

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>


export const runInitialize = ():ThunkType => {
    return (dispatch) => {
        let promise = dispatch(setAuthTC())
        promise.then(() => dispatch(setupInitialize()))
    }
}


export default appReducer