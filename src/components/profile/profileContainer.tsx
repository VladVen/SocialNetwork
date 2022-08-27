import React from "react";
import style from './profile.module.css'
import {connect} from "react-redux";
import Profile from "./profile";
import {
    getProfileStatusTC,
    getProfileTC,
    updateProfile,
    updateProfileStatusTC,
    uploadNewAvatar
} from "../../redux/reducers/profilePageReducer";
import withRouter, {WithRouterProps} from "../../common/HOC/withRouter";
import {withAuthRedirect} from "../../common/HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {UpdateProfileDataType} from "../../types/types";
import {Navigate} from "react-router-dom";

type MapState = ReturnType<typeof mapStateToProps>

type MapDispatch = {
    getProfileTC: (userId: number) => void
    getProfileStatusTC: (userId: number) => void
    updateProfileStatusTC: (status: string) => void
    uploadNewAvatar: (file: File ) => void
    updateProfile: (profile: UpdateProfileDataType) => void
}

type Router = {
    router: WithRouterProps
}

type Props = MapState & MapDispatch & Router

class ProfileContainer extends React.Component<Props> {
    refreshProfile () {
        let userId: number | null = +this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizeId
            if(!userId) {
                // this.props.history.push('/login')
                return <Navigate to={'/login'}/>
            }
        }
            this.props.getProfileTC(userId)
            this.props.getProfileStatusTC(userId)

    }

    componentDidMount() {
        this.refreshProfile()
    }
    // todo: complete profile loading
    componentDidUpdate(prevProps: Props, prevState: Props) {
        if(this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <div className={style.inform}>
                <Profile {...this.props}
                         isOwner={!this.props.router.params.userId}
                         profileData={this.props.profileData}
                         status = {this.props.status}
                         updateProfileStatusTC = {this.props.updateProfileStatusTC}
                         uploadNewAvatar={this.props.uploadNewAvatar}
                         updateProfile={this.props.updateProfile}
                         errorMessage={this.props.errorMessage}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    authorizeId: state.auth.id,
    errorMessage: state.profilePage.errorMessage,
})
const mapDispatchToProps = {
    getProfileTC,
    getProfileStatusTC,
    updateProfileStatusTC,
    uploadNewAvatar,
    updateProfile
}

export default compose<React.ComponentType>(
    connect<MapState, MapDispatch, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

