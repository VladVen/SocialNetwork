import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./profile";
import {setProfile} from "../../redux/reducers/profilePageReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/5`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <div className={style.inform}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

connect(mapStateToProps, {setProfile})(ProfileContainer)

export default ProfileContainer