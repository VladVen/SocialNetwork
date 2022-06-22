import style from './sideBar.module.css'
import {NavLink} from "react-router-dom";

const sideBar = () => {
    return (
        <nav className={style.sideBar}>
            <div className={style.bars}>
                <NavLink to='/profile' className = { navData => navData.isActive ? style.active : style.bars }>My Profile</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/dialogues' className = { navData => navData.isActive ? style.active : style.bars }>Messages</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/news' className = { navData => navData.isActive ? style.active : style.bars }>News</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/music' className = { navData => navData.isActive ? style.active : style.bars} >Music</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/settings' className = { navData => navData.isActive ? style.active : style.bars }>Settings</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/users' className = { navData => navData.isActive ? style.active : style.bars }>Users</NavLink>
            </div>
        </nav>
    )
}
export default sideBar