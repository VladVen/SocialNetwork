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
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizeId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileTC(userId)
        this.props.getProfileStatusTC(userId)
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
    status: state.profilePage.status,
    authorizeId: state.auth.id
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

