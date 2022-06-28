import React from "react";
import {connect} from "react-redux";
import User from "./user";
import {
    setFollow, setFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    setUnfollow
} from "../../redux/reducers/userPageReducer";
import axios from "axios";
import style from './users.module.css'
import Preloader from "../common/Preloader";

class UsersApi extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }
        )
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    currentPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }
        )
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }

}
const mapDispatchToProps = {
    setFollow,
    setUnfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi)

export default UsersContainer