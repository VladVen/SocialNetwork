let actionType = {
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setUsers: 'SETUSERS',
    setCurrentPage: 'SETCURRENTPAGE',
    setTotalCount: 'SETTOTALCOUNT',
    loader: 'LOADER'
}

let reserveState =  {
    usersData: [    ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
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
            case(actionType.loader):
            return {
                ...state,
                isFetching: action.isFetching
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
export const setCurrentPageAC = (currentPage) => ({
    type: actionType.setCurrentPage,
    currentPage
})
export const setTotalCountAC = (totalCount) => ({
    type: actionType.setTotalCount,
    totalCount
})
export const loaderAC = (isFetching) => ({
    type: actionType.loader,
    isFetching
})

export default userPageReducer