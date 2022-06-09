let actionType = {
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setUsers: 'SETUSERS'
}

let n = 1
let reserveState =  {

    usersData: [    ],
}

const userPageReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.follow):
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case(actionType.unfollow):
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case(actionType.setUsers):
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }
            default:
            return state
    }

}
export const followAC = (userId) => ({
    type: actionType.follow,
    userId
})
export const unfollowAC = (userId) => ({
    type: actionType.unfollow,
    userId
})

export const setUsersAC = (users) => ({
    type: actionType.setUsers,
    users
})

export default userPageReducer