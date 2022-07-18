import style from "./users.module.css";
import avatar from "../images/logo192.png";
import React from "react";
import {NavLink} from "react-router-dom";

const UserTemplate = ({users, followInProgress, setFollowTC, setUnfollowTC}) => {

    return (
        <div>
            <span>
                <div className={style.ava}>
                    <NavLink to={'/profile/' + users.id}>
                    <img src={users.photos.small != null ? users.photos.small : avatar}/>
                        </NavLink>
                </div>
                {users.followed
                    ? <button disabled={followInProgress.some(id => id === users.id)} onClick={() => {
                        setFollowTC(users.id)
                    }}> Unfollow </button>
                    : <button disabled={followInProgress.some(id => id === users.id)} onClick={() => {
                        setUnfollowTC(users.id)
                    }}> Follow </button>}
            </span>
            <span>
                    <span>
                <div>{users.name} </div>
                <div>{'users.bio'}</div>
                    </span>
                <span>
                    <div>{'users.location'}</div>
                </span>
            </span>
        </div>

    )
}
export default UserTemplate