import {authAPI} from "../../API/api";

let actionType = {
    setFetching: 'SET_FETCHING',
    setAuth: 'SET_AUTH',
    login: 'LOG_IN',
    catchError: 'CATCH_ERROR',
    captcha: 'CAPTCHA'
}

let reserveState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: false,
    error: false,
    errorMessage: '',
    captchaUrl: null
}

const authReducer = (state = reserveState, action) => {
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
    authData: {email, id, login, isAuth,
        error: false,
        errorMessage: '',
        captchaUrl: null }
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


export const setAuthTC = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setAuth(email, id, login, true))
                }
            })
    }
}
export const logInTC = (email, password, rememberMe, captcha = null) => {
    return (dispatch) => {
        authAPI.logIn(email, password, rememberMe, captcha)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthTC())
                } else if( data.resultCode === 10) {
                    dispatch(catchError(data.messages))
                    authAPI.getCaptcha()
                        .then(data => {
                            dispatch(getCaptcha(data.url))
                        })
                } else {
                    dispatch(catchError(data.messages))
                }
            })
    }
}
export const logOutTC = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuth(null, null, null, false,))
                }
            })
    }
}

export default authReducer