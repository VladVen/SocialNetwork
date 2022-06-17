import React from "react";
import {connect} from "react-redux";
import UserClass from "./userClass";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/userPageReducer";

const mapStateToProps = (state) => {

    return {
        usersData:  state.usersPage.usersData,
        pageSize:  state.usersPage.pageSize,
        totalCount:  state.usersPage.totalCount,
        currentPage:  state.usersPage.currentPage,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => {
            dispatch(followAC(userId))
        },
        setUnfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)

export default UsersContainer