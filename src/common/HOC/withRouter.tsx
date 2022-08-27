import {useParams, useLocation, useNavigate} from "react-router-dom";
import React from "react";

export type WithRouterProps = {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}


function withRouter<T extends WithRouterProps>(Component: React.ComponentType<T>) {
    //type Props = typeof Component
    function ComponentWithUrl(props: Omit<T, keyof WithRouterProps>) {
        let location = useLocation()
        let params = useParams()
        let navigate = useNavigate()
        return (
            <Component {...props as T}
                       router={{params, location, navigate}}
            />
        )
    }

    return ComponentWithUrl
}

export default withRouter
