import {followAPI, usersAPI} from "../../API/api";
import updateArraysObj from "../../common/utilites/updateArraysObj";
import {usersDataType} from "../../types/types";


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const SET_FETCHING = 'users/SET_FETCHING'
const FOLLOW_IN_PROGRESS = 'users/FOLLOW_IN_PROGRESS'




const initialState = {
    usersData: [] as Array<usersDataType>,
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>
}

type initialStateType = typeof initialState

const userPageReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateArraysObj(state.usersData, "id", action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateArraysObj(state.usersData, "id", action.userId, {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOW_IN_PROGRESS:
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

type setFollowType ={
    type: typeof FOLLOW,
    userId: number
}

const setFollow = (userId: number):setFollowType => ({
    type: FOLLOW,
    userId
})

type setUnfollowType ={
    type: typeof UNFOLLOW,
    userId: number
}

const setUnfollow = (userId: number):setUnfollowType => ({
    type: UNFOLLOW,
    userId
})

type setUsersType = {
    type: typeof SET_USERS,
    users: Array<usersDataType>
}

const setUsers = (users: Array<usersDataType>):setUsersType => ({
    type: SET_USERS,
    users
})

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const setCurrentPage = (currentPage: number):setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type setTotalCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}

export const setTotalCount = (totalCount: number):setTotalCountType => ({
    type: SET_TOTAL_COUNT,
    totalCount
})

type setFetchingType = {
    type: typeof SET_FETCHING,
    isFetching: boolean
}

export const setFetching = (isFetching:boolean): setFetchingType => ({
    type: SET_FETCHING,
    isFetching
})

type setFollowInProgress = {
    type: typeof FOLLOW_IN_PROGRESS,
    followInProgress: boolean,
    userId: number
}

 export const setFollowInProgress = (followInProgress: boolean, userId: number): setFollowInProgress => ({
    type: FOLLOW_IN_PROGRESS,
    followInProgress,
    userId
})

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
    dispatch(setFetching(false))
}

const followUnfollow = async (dispatch: any, id: number, APIMethod: any, actionCreator: any) => {
    dispatch(setFollowInProgress(true, id))
    let data = await APIMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
        dispatch(setFollowInProgress(false, id))
    }
}

export const setFollowTC = (id: number) => (dispatch:any) => {
    followUnfollow(dispatch, id, followAPI.delFollow.bind(followAPI), setUnfollow)

}
export const setUnfollowTC = (id: number) => (dispatch: any) => {
    followUnfollow(dispatch, id, followAPI.addFollow.bind(followAPI), setFollow)
}


export default userPageReducer