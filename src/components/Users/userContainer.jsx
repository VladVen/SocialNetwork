import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    setFollow,
    setCurrentPage,
    setUnfollow, setFollowInProgress, getUsersTC, setFollowTC, setUnfollowTC
} from "../../redux/reducers/userPageReducer";
import style from './users.module.css'
import Preloader from "../../common/Preloader";
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelector";

class UsersApi extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    currentPageChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div className={style.inform}>
                {this.props.isFetching ? <Preloader/>
                    : <Users currentPageChanger={this.currentPageChanger} usersData={this.props.usersData}
                             pageSize={this.props.pageSize}
                             totalCount={this.props.totalCount}
                             currentPage={this.props.currentPage}
                             followInProgress={this.props.followInProgress}
                             setFollowTC={this.props.setFollowTC}
                             setUnfollowTC={this.props.setUnfollowTC}
                    />}

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followInProgress: state.usersPage.followInProgress
//     }
//
// }
const mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }

}
const mapDispatchToProps = {
    setFollow,
    setUnfollow,
    setCurrentPage,
    setFollowInProgress,
    getUsersTC,
    setFollowTC,
    setUnfollowTC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApi)