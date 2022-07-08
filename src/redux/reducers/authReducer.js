import {authAPI} from "../../API/api";

let actionType = {
    setFetching: 'SET_FETCHING',
    setAuth: 'SET_AUTH',
    login: 'LOG_IN'
}

let reserveState = {
    email: null,
    id: null,
    login: null,
    password: null,
    rememberMe: false,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.setAuth):

            return {
                ...state,
                ...action.authData,
                isAuth: true
            }
        case(actionType.setFetching):
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }

}

export const setAuth = (email, id, login) => ({
    type: actionType.setAuth,
    authData: {email, id, login}
})

export const setFetching = (isFetching) => ({
    type: actionType.setFetching,
    isFetching
})

export const logIn = (email, password, rememberMe) => ({
    type: actionType.login,
    authData: {email, password, rememberMe}
})

export const setAuthTC = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setAuth(email, id, login))
                }
            })
    }
}
export const logInTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logIn(email, password, rememberMe))
                }
            })
    }
}

export default authReducer