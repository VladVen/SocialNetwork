import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {actions, FilterType, getUsersTC, setFollowTC, setUnfollowTC} from "../../redux/reducers/userPageReducer";
import Preloader from "../../common/Preloader";
import {
    getCurrentPage,
    getFilter,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelector";
import {usersDataType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalCount: number
    followInProgress: Array<number>
    usersData: Array<usersDataType>,
    filter: FilterType
}
type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void
    setFollowTC: (id: number) => void
    setUnfollowTC: (id: number) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersApi extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    currentPageChanger = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize, this.props.filter)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/>
                    : <Users currentPageChanger={this.currentPageChanger} usersData={this.props.usersData}
                             pageSize={this.props.pageSize}
                             totalCount={this.props.totalCount}
                             currentPage={this.props.currentPage}
                             followInProgress={this.props.followInProgress}
                             setFollowTC={this.props.setFollowTC}
                             setUnfollowTC={this.props.setUnfollowTC}
                             getUsersTC={this.props.getUsersTC}
                             filter={this.props.filter}
                    />}

            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state),
        filter: getFilter(state)
    }

}



export default connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps, {
    setCurrentPage: actions.setCurrentPage,
    getUsersTC,
    setFollowTC,
    setUnfollowTC
})(UsersApi)