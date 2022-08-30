import updateArraysObj from "../../common/utilites/updateArraysObj";
import {usersDataType} from "../../types/types";
import {Dispatch} from "redux";
import {CommonThunkType, InferActionType} from "../reduxStore";
import {followAPI, usersAPI} from "../../API/users-api";
import {DefaultResponse, ResultCodes} from "../../API/api";


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const SET_FETCHING = 'users/SET_FETCHING'
const FOLLOW_IN_PROGRESS = 'users/FOLLOW_IN_PROGRESS'
const SET_FILTER = 'users/SET_FILTER'


const initialState = {
    usersData: [] as Array<usersDataType>,
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type initialStateType = typeof initialState
export type FilterType = typeof initialState.filter

export const userPageReducer = (state = initialState, action: ActionsType): initialStateType => {
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
            case SET_FILTER:
            return {
                ...state,
                filter: action.payload
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

type ActionsType = InferActionType<typeof actions>

export const actions = {
    setFollow: (userId: number) => ({
        type: FOLLOW,
        userId
    } as const),
    setUnfollow: (userId: number) => ({
        type: UNFOLLOW,
        userId
    } as const),
    setUsers: (users: Array<usersDataType>) => ({
        type: SET_USERS,
        users
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const),
     setTotalCount: (totalCount: number) => ({
        type: SET_TOTAL_COUNT,
        totalCount
    } as const),
     setFetching: (isFetching: boolean) => ({
        type: SET_FETCHING,
        isFetching
    } as const),
     setFollowInProgress:  (followInProgress: boolean, userId: number) => ({
        type: FOLLOW_IN_PROGRESS,
        followInProgress,
        userId
    } as const),
    setFilter:  (filter: FilterType) => ({
        type: SET_FILTER,
        payload: filter
    } as const),
}




type ThunkType = CommonThunkType<ActionsType>

export const getUsersTC = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching(true))
    dispatch(actions.setFilter(filter))
    dispatch(actions.setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalCount(data.totalCount))
    dispatch(actions.setFetching(false))
}


const _followUnfollow = async (dispatch: Dispatch<ActionsType>, id: number,
                               APIMethod: (id: number) => Promise<DefaultResponse>,
                               actionCreator:(id: number)=> ActionsType ) => {
    dispatch(actions.setFollowInProgress(true, id))
    let data = await APIMethod(id)
    if (data.resultCode === ResultCodes.success) {
        dispatch(actionCreator(id))
        dispatch(actions.setFollowInProgress(false, id))
    }
}
export const setFollowTC = (id: number): ThunkType => async (dispatch) => {
    await _followUnfollow(dispatch, id, followAPI.addFollow.bind(followAPI), actions.setFollow)

}
export const setUnfollowTC = (id: number): ThunkType => async (dispatch) => {
    await _followUnfollow(dispatch, id, followAPI.delFollow.bind(followAPI), actions.setUnfollow)
}


export default userPageReducer