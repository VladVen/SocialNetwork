import style from "./users.module.css";
import Pages from "./Pages";
import React from "react";
import UserTemplate from "./userTemplate";

const Users = (props) => {

    return (
        <div>
            {
                props.usersData.map(users => <UserTemplate key={users.id}
                                                           users={users}
                                                           followInProgress={props.followInProgress}
                                                           setFollowTC={props.setFollowTC}
                                                           setUnfollowTC={props.setUnfollowTC} />
                )
            }
            <div className={style.pages}>
                <Pages currentPageChanger={props.currentPageChanger}
                       totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}/>
            </div>
        </div>
    )
}
export default Users