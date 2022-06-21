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
import axios from "axios";


class UsersApi extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    currentPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <UserClass currentPageChanger={this.currentPageChanger} usersData={this.props.usersData}
                       pageSize={this.props.pageSize}
                       totalCount={this.props.totalCount}
                       currentPage={this.props.currentPage}
                       setUnfollow={this.props.setUnfollow}
                       setFollow={this.props.setFollow}
            />
        )
    }
}
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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)

export default UsersContainer