import {AppStateType} from "../reduxStore";


export const getErrorMessage = (state: AppStateType) => {
    return state.auth.errorMessage
}
export const getCaptcha = (state: AppStateType) => {
    return state.auth.captchaUrl
}
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getLogin = (state: AppStateType) => {
    return state.auth.login
}
