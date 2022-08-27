import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

type Props = {isAuth: boolean}

export function withAuthRedirect<P> (Component: React.ComponentType<P> ) {

    function RedirectComponent (props: Props) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...restProps as P}/>
    }

    const mapStateToProps = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
    })
    return connect<Props, {}, P,  AppStateType>(mapStateToProps)(RedirectComponent)
}

