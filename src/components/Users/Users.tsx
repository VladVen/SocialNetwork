import style from "./users.module.css";
import Pages from "./Pages";
import React, {useEffect} from "react";
import UserTemplate from "./userTemplate";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType, getUsersTC, setFollowTC, setUnfollowTC} from "../../redux/reducers/userPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getFollowInProgress,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelector";
import {AnyAction} from "redux";
import {useSearchParams} from "react-router-dom";


type propsType = {

}

const Users: React.FC<propsType> = React.memo(() => {

    const totalCount = useSelector(getTotalCount)
    const usersData = useSelector(getUsers)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followInProgress = useSelector(getFollowInProgress)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {

        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)
    }, [filter, currentPage])



//todo: make solution for dispatch type
    const currentPageChanger = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter) as unknown as AnyAction)
    }
    const onFilter = (filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter) as unknown as AnyAction)
    }

    const setFollow = (id: number) => {
        dispatch(setFollowTC(id) as unknown as AnyAction)
    }
    const setUnfollow = (id: number) => {
        dispatch(setUnfollowTC(id) as unknown as AnyAction)
    }


    return (
        <div className={style.inform}>
            <div className={style.search}>
                <UsersSearchForm onFilter={onFilter} pageSize={pageSize} filter={filter}/>
            </div>
            <div>
                {
                    usersData.map(users => <UserTemplate key={users.id}
                                                         users={users}
                                                         followInProgress={followInProgress}
                                                         setFollowTC={setFollow}
                                                         setUnfollowTC={setUnfollow}/>
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