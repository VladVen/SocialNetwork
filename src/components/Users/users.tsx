import style from "./users.module.css";
import Pages from "./Pages";
import React from "react";
import UserTemplate from "./userTemplate";
import {usersDataType} from "../../types/types";


type propsType = {
    usersData: Array<usersDataType>
    followInProgress: Array<number>
    setFollowTC: (id: number)=> void
    setUnfollowTC:  (id: number)=> void
    currentPageChanger: (page: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
}

const Users: React.FC<propsType> = ({usersData, followInProgress, setFollowTC, setUnfollowTC,
                   currentPageChanger, totalCount, pageSize, currentPage}) => {

    return (
        <div>
            {
                usersData.map(users => <UserTemplate key={users.id}
                                                           users={users}
                                                           followInProgress={followInProgress}
                                                           setFollowTC={setFollowTC}
                                                           setUnfollowTC={setUnfollowTC} />
                )
            }
            <div className={style.pages}>
                <Pages currentPageChanger={currentPageChanger}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       currentPage={currentPage}/>
            </div>
        </div>
    )
}
export default Users