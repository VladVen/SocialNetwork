import React from "react";
import {connect} from "react-redux";
import User from "./user";
import {
    setFollow, setFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    setUnfollow, setFollowInProgress
} from "../../redux/reducers/userPageReducer";
import style from './users.module.css'
import Preloader from "../common/Preloader";
import {usersAPI} from "../../API/api";

class UsersApi extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    currentPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <div className={style.inform}>
                {this.props.isFetching ? <Preloader/>
                    : <User currentPageChanger={this.currentPageChanger} usersData={this.props.usersData}
                            pageSize={this.props.pageSize}
                            totalCount={this.props.totalCount}
                            currentPage={this.props.currentPage}
                            setUnfollow={this.props.setUnfollow}
                            setFollow={this.props.setFollow}
                            isFetching={this.props.isFetching}
                            setFollowInProgress={this.props.setFollowInProgress}
                            followInProgress={this.props.followInProgress}
                    />}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }

}
const mapDispatchToProps = {
    setFollow,
    setUnfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching,
    setFollowInProgress
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)

export default UsersContainer