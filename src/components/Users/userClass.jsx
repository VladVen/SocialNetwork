import style from "./users.module.css";
import avatar from "../images/logo192.png";
import Pages from "./Pages";
import React from "react";
import {NavLink} from "react-router-dom";

const UserClass = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    return (
        <div>
            {
                props.usersData.map(users => <div key={users.id}>
            <span>
                <div className={style.ava}>
                    <NavLink to={'/profile/' + users.id} >
                    <img src={users.photos.small != null ? users.photos.small : avatar}/>
                        </NavLink>
                </div>
                {users.follow
                    ? <button onClick={() => {
                        props.setUnfollow(users.id)
                    }}> Unfollow </button>
                    : <button onClick={() => {
                        props.setFollow(users.id)
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
            <div className={style.pages}>
                <Pages currentPageChanger={props.currentPageChanger} pagesCount={pagesCount}
                       currentPage={props.currentPage}/>
            </div>
        </div>
    )
}
export default UserClass