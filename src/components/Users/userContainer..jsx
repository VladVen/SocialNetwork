import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/userPageReducer";

const mapStateToProps = (state) => {

    return {
        usersPage:  state.usersPage,
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer