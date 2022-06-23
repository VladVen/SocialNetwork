import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./profile";
import {setUserProfile} from "../../redux/reducers/profilePageReducer";
import withRouter from "../common/withRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId
        if (!userId){
            userId = 24409
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data)
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

