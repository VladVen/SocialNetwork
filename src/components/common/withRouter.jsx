import {useParams,useLocation, useNavigate} from "react-router-dom";


function withRouter (Component) {
    function ComponentWithUrl(props) {
        let location = useLocation()
        let params = useParams()
        let navigate = useNavigate()
        return (
            <Component {...props}
                router={{params,location,navigate}}
            />
        )
    }
    return ComponentWithUrl
}

export default withRouter