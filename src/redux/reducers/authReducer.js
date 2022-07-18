import {authAPI} from "../../API/api";

let actionType = {
    setFetching: 'auth/SET_FETCHING',
    setAuth: 'auth/SET_AUTH',
    login: 'auth/LOG_IN',
    catchError: 'auth/CATCH_ERROR',
    captcha: 'auth/CAPTCHA'
}

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: false,
    error: false,
    errorMessage: '',
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionType.setAuth):

            return {
                ...state,
                ...action.authData,
            }
        case(actionType.setFetching):
            return {
                ...state,
                isFetching: action.isFetching
            }
        case(actionType.catchError):
            return {
                ...state,
                errorMessage: action.error,
                error: true
            }
        case(actionType.captcha):
            return {
                ...state,
                captchaUrl: action.captcha,
            }
        default:
            return state
    }

}

export const setAuth = (email, id, login, isAuth,) => ({
    type: actionType.setAuth,
    authData: {
        email, id, login, isAuth,
        error: false,
        errorMessage: '',
        captchaUrl: null
    }
})

export const setFetching = (isFetching) => ({
    type: actionType.setFetching,
    isFetching
})
export const catchError = (error) => ({
    type: actionType.catchError,
    error
})
export const getCaptcha = (captcha) => ({
    type: actionType.captcha,
    captcha
})


export const setAuthTC = () => async (dispatch) => {
    let data = await authAPI.getAuth()
    if (data.resultCode === 0) {
        let {email, id, login} = data.data
        dispatch(setAuth(email, id, login, true))
    }
}
export const logInTC = (email, password, rememberMe, captcha = null) =>
    async (dispatch) => {
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

export const logOutTC = () => async (dispatch) => {
    let data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false,))
    }
}

export default authReducer