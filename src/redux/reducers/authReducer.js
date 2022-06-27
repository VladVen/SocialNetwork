let actionType = {
    setFetching: 'SET_FETCHING',
    setAuth: 'SET_AUTH'

}

let reserveState = {
        email: null,
        id: null,
        login: null,
        isAuth: false,
    isFetching: false
}

const authReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.setAuth):

            return {
                ...state,
                ...action.authData,
                isAuth:true
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

export default authReducer