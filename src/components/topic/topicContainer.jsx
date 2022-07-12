import React from "react";
import {connect} from "react-redux";
import {logOutTC} from "../../redux/reducers/authReducer";
import Topic from "./topic";


class topicContainer extends React.Component {

    render() {
        return(
                    <Topic {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = {
    logOutTC
}


export default connect(mapStateToProps, mapDispatchToProps)(topicContainer)