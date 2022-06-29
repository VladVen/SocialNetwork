let actionType = {
    setFollow: 'FOLLOW',
    setUnfollow: 'UNFOLLOW',
    setUsers: 'SETUSERS',
    setCurrentPage: 'SETCURRENTPAGE',
    setTotalCount: 'SETTOTALCOUNT',
    setFetching: 'SETFETCHING',
    followInProgress: 'FOLLOW_IN_PROGRESS'
}

let reserveState =  {
    usersData: [    ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const userPageReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.setFollow):
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case(actionType.setUnfollow):
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case(actionType.setUsers):
            return {
                ...state,
                usersData: action.users
            }
            case(actionType.setCurrentPage):
            return {
                ...state,
                currentPage: action.currentPage
            }
            case(actionType.setTotalCount):
            return {
                ...state,
                totalCount: action.totalCount
            }
            case(actionType.setFetching):
            return {
                ...state,
                isFetching: action.isFetching
            }
        case(actionType.followInProgress):
            return {
                ...state,
                followInProgress: action.followInProgress
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }
            default:
            return state
    }

}
export const setFollow = (userId) => ({
    type: actionType.setFollow,
    userId
})
export const setUnfollow = (userId) => ({
    type: actionType.setUnfollow,
    userId
})
export const setUsers = (users) => ({
    type: actionType.setUsers,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: actionType.setCurrentPage,
    currentPage
})
export const setTotalCount = (totalCount) => ({
    type: actionType.setTotalCount,
    totalCount
})
export const setFetching = (isFetching) => ({
    type: actionType.setFetching,
    isFetching
})
export const setFollowInProgress = (followInProgress, userId) => ({
    type: actionType.followInProgress,
    followInProgress,
    userId
})

export default userPageReducer