import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfileStatusTC, getProfileTC, updateProfileStatusTC} from "../../redux/reducers/profilePageReducer";
import withRouter from "../common/withRouter";
import withAuthRedirect from "../common/HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileTC(this.props.router.params.userId)
        this.props.getProfileStatusTC(this.props.router.params.userId)
    }

    render() {
        return (
            <div className={style.inform}>
                <Profile {...this.props}
                         profileData={this.props.profileData}
                         status = {this.props.status}
                         updateProfileStatusTC = {this.props.updateProfileStatusTC}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    status: state.profilePage.status
})
const mapDispatchToProps = {
    getProfileTC,
    getProfileStatusTC,
    updateProfileStatusTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

