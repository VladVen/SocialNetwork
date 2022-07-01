import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import Profile from "./profile";
import {getProfileTC} from "../../redux/reducers/profilePageReducer";
import withRouter from "../common/withRouter";
import withAuthRedirect from "../common/HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileTC(this.props.router.params.userId)
    }

    render() {
        return (
            <div className={style.inform}>
                <Profile {...this.props} profileData={this.props.profileData}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
})
const mapDispatchToProps = {
    getProfileTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

