import {setAuthTC} from "./authReducer";
import {CommonThunkType, InferActionType} from "../reduxStore";

const setInitialize = 'app/SET_INITIALIZE'


const initialState = {
    initialized: false
}
type initialStateType = typeof initialState

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
type ActionsType = InferActionType<typeof actions>


const actions = {
    setupInitialize: () => ({
        type: setInitialize,
    })
}


type ThunkType = CommonThunkType<ActionsType, void>


export const runInitialize = ():ThunkType => {
    return (dispatch) => {
        let promise = dispatch(setAuthTC())
        promise.then(() => dispatch(actions.setupInitialize()))
    }
}


export default appReducer