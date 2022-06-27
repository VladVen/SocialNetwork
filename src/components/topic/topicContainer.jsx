import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setAuth, setFetching} from "../../redux/reducers/authReducer";
import Topic from "./topic";


class topicContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuth(email, id, login)
                }
            })
    }
    render() {
        return(
            <>
                {
                    <Topic {...this.props} />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})



export default connect(mapStateToProps, {setAuth, setFetching})(topicContainer)