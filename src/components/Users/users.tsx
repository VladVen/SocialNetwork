import style from "./users.module.css";
import Pages from "./Pages";
import React from "react";
import UserTemplate from "./userTemplate";
import {usersDataType} from "../../types/types";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType} from "../../redux/reducers/userPageReducer";


type propsType = {
    usersData: Array<usersDataType>
    followInProgress: Array<number>
    setFollowTC: (id: number) => void
    setUnfollowTC: (id: number) => void
    currentPageChanger: (page: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void,
    filter: FilterType

}

const Users: React.FC<propsType> = React.memo(({
                                        usersData, followInProgress, setFollowTC, setUnfollowTC,
                                        currentPageChanger, totalCount, pageSize, currentPage, getUsersTC, filter
                                    }) => {

    return (
        <div className={style.inform}>
            <div className={style.search}>
                <UsersSearchForm getUsersTC={getUsersTC} pageSize={pageSize} filter={filter}/>
            </div>
            <div>
                {
                    usersData.map(users => <UserTemplate key={users.id}
                                                         users={users}
                                                         followInProgress={followInProgress}
                                                         setFollowTC={setFollowTC}
                                                         setUnfollowTC={setUnfollowTC}/>
                    )
                }
            </div>
            <div className={style.pages}>
                <Pages currentPageChanger={currentPageChanger}
                       totalCount={totalCount}
                       pageSize={pageSize}
                       currentPage={currentPage}/>
            </div>
        </div>
    )
})
export default Users