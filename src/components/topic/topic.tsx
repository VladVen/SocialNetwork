import style from './topic.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


type Props = {
    isAuth: boolean
    login: string | null
    logOutTC: () => void
}

const Topic:React.FC<Props> = ({isAuth, login,logOutTC}) => {
    return (
        <header className={style.topic}>
       <img className={style.logo} src='https://v.od.ua/uploads/92/logo.png'/>
            <div className={style.login}>
            { isAuth
                ? <div>
                    {login}
                    <button onClick={logOutTC}>Log out</button>
            </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    )
}
export default Topic