import {connect} from "react-redux";
import axios from "axios";
import {setAuth, setFetching} from "../../redux/reducers/authReducer";
import Topic from "./topic";


class topicContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me')
            .then(response => {
                this.props.setAuth(response.data)
            })
    }
    render() {
        return(
            <Topic />
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    authData: state.auth.authData
})

const mapDispatchToProps = {
    setAuth,
    setFetching
}

connect(mapStateToProps, mapDispatchToProps)(topicContainer)