import {authAPI, ResultCodes} from "../../API/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionType} from "../reduxStore";

const SET_AUTH = 'auth/SET_AUTH'
const CATCH_ERROR = 'auth/CATCH_ERROR'
const CAPTCHA = 'auth/CAPTCHA'



const initialState = {
    email: null as string | null,
    id: null as number |null,
    login: null as string |null,
    isAuth: false,
    errorMessage: null as string | null,
    captchaUrl:null as string | null
}

type initialStateType =  typeof initialState

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.authData,
            }
        case CATCH_ERROR:
            return {
                ...state,
                errorMessage: action.error,
            }
        case CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captcha,
            }
        default:
            return state
    }

}

type ActionsType = InferActionType<typeof actions>


export const actions = {
    setAuth: (email: string| null, id: number| null, login: string| null, isAuth: boolean,): setAuthType => ({
        type: SET_AUTH,
        authData: {
            email, id, login, isAuth,
            errorMessage: null,
            captchaUrl: null
        }
    } as const),
    catchError: (error: string) => ({
        type: CATCH_ERROR,
        error
    } as const),
    getCaptcha: (captcha: string) => ({
        type: CAPTCHA,
        captcha
    } as const),

}

type authDataType = {
    email: string| null,
    id: number| null,
    login: string | null,
    isAuth: boolean,
    errorMessage: null,
    captchaUrl: null
}

type setAuthType = {
    type: typeof SET_AUTH,
    authData: authDataType
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


export const setAuthTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === ResultCodes.success) {
        const {email, id, login} = data.data
        dispatch(actions.setAuth(email, id, login, true))
    }
}
export const logInTC = (email: string, password: string, rememberMe: boolean, captcha: null | string = null): ThunkType =>
    async (dispatch) => {
        let data = await authAPI.logIn(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodes.success) {
            await dispatch(setAuthTC())
        } else if (data.resultCode === ResultCodes.captcha) {
            dispatch(actions.catchError(data.messages[1]))
            authAPI.getCaptcha()
                .then(data => {
                    dispatch(actions.getCaptcha(data.url))
                })
        } else {
            dispatch(actions.catchError(data.messages[1]))
        }
    }

export const logOutTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logOut()
    if (data.resultCode === ResultCodes.success) {
        dispatch(actions.setAuth(null, null, null, false,))
    }
}

export default authReducer