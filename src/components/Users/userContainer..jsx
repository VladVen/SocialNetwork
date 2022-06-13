import React from "react";
import {connect} from "react-redux";
import UserClass from "./userClass";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/userPageReducer";

const mapStateToProps = (state) => {

    return {
        usersData:  state.usersPage.usersData,
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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)

export default UsersContainer