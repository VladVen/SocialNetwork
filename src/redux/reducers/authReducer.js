let actionType = {
    setFetching: 'SET_FETCHING',
    setAuth: 'SET_AUTH'

}

let reserveState = {
    authData: {
        id: null,
        login: null,
        email: null
    },
    isFetching: false
}

const authReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.setAuth):
            return {
                ...state,
                ...action.authData
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

export const setAuth = (authData) => ({
    type: actionType.setAuth,
    authData
})

export const setFetching = (isFetching) => ({
    type: actionType.setFetching,
    isFetching
})

export default authReducer