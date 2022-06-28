import style from "./users.module.css";
import avatar from "../images/logo192.png";
import Pages from "./Pages";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let follow = (users) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
            withCredentials: true,
            headers: {
                "API-Key": "c4eac98f-e206-4543-a154-529053d6be82"
            }
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    props.setUnfollow(users.id)
                }
            })
    }
    let unfollow = (users) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, null , {
            withCredentials: true,
            headers: {
                "API-Key": "c4eac98f-e206-4543-a154-529053d6be82"
            }
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    props.setFollow(users.id)
                }
            })
    }

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
                {users.followed
                    ? <button onClick={follow}> Unfollow </button>
                    : <button onClick={unfollow}> Follow </button>}
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
export default User