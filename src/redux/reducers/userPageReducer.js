import {followAPI, usersAPI} from "../../API/api";
import updateArraysObj from "../../common/utilites/updateArraysObj";

let actionType = {
    setFollow: 'users/FOLLOW',
    setUnfollow: 'users/UNFOLLOW',
    setUsers: 'users/SET_USERS',
    setCurrentPage: 'users/SET_CURRENTPAGE',
    setTotalCount: 'users/SET_TOTALCOUNT',
    setFetching: 'users/SET_FETCHING',
    followInProgress: 'users/FOLLOW_IN_PROGRESS'
}

let initialState = {
    usersData: [],
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
                usersData: updateArraysObj(state.usersData, "id", action.userId, { followed: true} )
            }
        case(actionType.setUnfollow):
            return {
                ...state,
                usersData: updateArraysObj(state.usersData, "id", action.userId, { followed: false} )
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

export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
    dispatch(setFetching(false))
}

const followUnfollow = async (dispatch, id, APIMethod, actionCreator) => {
    dispatch(setFollowInProgress(true, id))
    let data = await APIMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
        dispatch(setFollowInProgress(false, id))
    }
}

export const setFollowTC = (id) =>  (dispatch) => {
    followUnfollow(dispatch, id, followAPI.delFollow.bind(followAPI), setUnfollow)

}
export const setUnfollowTC = (id) =>  (dispatch) => {
    followUnfollow(dispatch, id, followAPI.addFollow.bind(followAPI), setFollow)
}


export default userPageReducer