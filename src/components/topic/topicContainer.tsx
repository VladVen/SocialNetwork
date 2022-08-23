import React from "react";
import {connect} from "react-redux";
import {logOutTC} from "../../redux/reducers/authReducer";
import Topic from "./topic";
import {AppStateType} from "../../redux/reduxStore";



type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchPropsType = {
    logOutTC: () => void
}
type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class topicContainer extends React.Component<PropsType> {

    render() {
        return (
            <Topic isAuth={this.props.isAuth} login={this.props.login} logOutTC={this.props.logOutTC}  />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})




export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {logOutTC})(topicContainer)