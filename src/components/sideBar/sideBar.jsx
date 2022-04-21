import style from './sideBar.module.css'
import {NavLink} from "react-router-dom";

const sideBar = () => {
    return (
        <nav className={style.sideBar}>
            <div className={style.bars}>
                <NavLink to='/inform' activeClassName={style.activeLink}>My Profile</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/dialogues' activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.bars}>
                <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default sideBar