import React from "react";
import {connect} from "react-redux";
import {setAuthTC} from "../../redux/reducers/authReducer";
import Topic from "./topic";


class topicContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthTC()
    }
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
    setAuthTC
}


export default connect(mapStateToProps, mapDispatchToProps)(topicContainer)