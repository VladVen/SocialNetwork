import style from './topic.module.css'
import {NavLink} from "react-router-dom";

const Topic = (props) => {
    return (
        <header className={style.topic}>
       <img className={style.logo} src='https://v.od.ua/uploads/92/logo.png'/>
            <div className={style.login}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    )
}
export default Topic