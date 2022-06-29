import style from "./users.module.css";
import avatar from "../images/logo192.png";
import Pages from "./Pages";
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../API/api";

const User = (props) => {
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
                {users.followed
                    ? <button disabled={props.followInProgress.some(id => id === users.id)} onClick={() => {
                        props.setFollowInProgress(true, users.id)
                        followAPI.delFollow(users.id)
                            .then(data => {
                                if(data.resultCode === 0) {
                                    props.setUnfollow(users.id)
                                    props.setFollowInProgress(false, users.id)
                                }
                            })
                    }}> Unfollow </button>
                    : <button disabled={props.followInProgress.some(id => id === users.id)} onClick={() => {
                        props.setFollowInProgress(true, users.id)
                        followAPI.addFollow(users.id)
                            .then(data => {
                                if(data.resultCode === 0) {
                                    props.setFollow(users.id)
                                    props.setFollowInProgress(false, users.id)
                                }
                            })
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
export default User