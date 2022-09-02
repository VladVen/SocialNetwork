import style from './topic.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../redux/selectors/authSelector";
import {logOutTC} from "../../redux/reducers/authReducer";
import {AnyAction} from "redux";



const Topic: React.FC = () => {
    const login = useSelector(getLogin)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOutTC() as unknown as AnyAction)
    }

    return (
        <header className={style.topic}>
       <img className={style.logo} src='https://v.od.ua/uploads/92/logo.png'/>
            <div className={style.login}>
            { isAuth
                ? <div>
                    {login}
                    <button onClick={logOut}>Log out</button>
            </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    )
}
export default Topic