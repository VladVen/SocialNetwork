import {AppStateType} from "../reduxStore";


export const getUsers = (state: AppStateType) => {
    return state.usersPage.usersData
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowInProgress = (state: AppStateType) => {
    return state.usersPage.followInProgress
}