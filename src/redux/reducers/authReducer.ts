import {authAPI} from "../../API/api";

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

const authReducer = (state = initialState, action: any): initialStateType => {
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

export const setAuth = (email: string| null, id: number| null, login: string| null, isAuth: boolean,): setAuthType => ({
    type: SET_AUTH,
    authData: {
        email, id, login, isAuth,
        errorMessage: null,
        captchaUrl: null
    }
})


type catchErrorType = {
    type: typeof CATCH_ERROR,
    error: string
}

export const catchError = (error: string): catchErrorType => ({
    type: CATCH_ERROR,
    error
})

type getCaptchaType = {
    type: typeof CAPTCHA,
    captcha: string
}
export const getCaptcha = (captcha: string): getCaptchaType => ({
    type: CAPTCHA,
    captcha
})


export const setAuthTC = () => async (dispatch: any) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        let {email, id, login} = data.data
        dispatch(setAuth(email, id, login, true))
    }
}
export const logInTC = (email: string, password: string, rememberMe: boolean, captcha = null) =>
    async (dispatch: any) => {
        let data = await authAPI.logIn(email, password, rememberMe, captcha)

        if (data.resultCode === 0) {
            dispatch(setAuthTC())
        } else if (data.resultCode === 10) {
            dispatch(catchError(data.messages))
            authAPI.getCaptcha()
                .then(data => {
                    dispatch(getCaptcha(data.url))
                })
        } else {
            dispatch(catchError(data.messages))
        }
    }

export const logOutTC = () => async (dispatch: any) => {
    let data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false,))
    }
}

export default authReducer