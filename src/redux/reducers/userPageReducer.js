import {followAPI, usersAPI} from "../../API/api";

let actionType = {
    setFollow: 'FOLLOW',
    setUnfollow: 'UNFOLLOW',
    setUsers: 'SETUSERS',
    setCurrentPage: 'SETCURRENTPAGE',
    setTotalCount: 'SETTOTALCOUNT',
    setFetching: 'SETFETCHING',
    followInProgress: 'FOLLOW_IN_PROGRESS'
}

let initialState =  {
    usersData: [    ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const userPageReducer = (state = initialState, action) => {
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

export const getUsersTC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setFetching(false))
        })
    }
}

export const setFollowTC = (id) => {
    return (dispatch) => {
        dispatch(setFollowInProgress(true, id))
        followAPI.delFollow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUnfollow(id))
                    dispatch(setFollowInProgress(false, id))
                }
            })
    }
}
export const setUnfollowTC = (id) => {
    return (dispatch) => {
        dispatch(setFollowInProgress(true, id))
        followAPI.addFollow(id)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setFollow(id))
                    dispatch(setFollowInProgress(false, id))
                }
            })
    }
}


export default userPageReducer