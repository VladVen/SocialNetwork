import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import Profile from "./profile";
import {setUserProfile} from "../../redux/reducers/profilePageReducer";
import withRouter from "../common/withRouter";
import {profileAPI} from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId){
            userId = 24409
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
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
    profileData: state.profilePage.profileData
})
const mapDispatchToProps = {
    setUserProfile,

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))

