import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {getCurrentPage, getFilter, getIsFetching, getPageSize} from "../../redux/selectors/usersSelector";
import {getUsersTC} from "../../redux/reducers/userPageReducer";
import {AnyAction} from "redux";
import {useSearchParams} from "react-router-dom";


type Props = {}


const UsersPage: React.FC<Props> = () => {

    const isFetching = useSelector(getIsFetching)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()

    type resultType = {
        page: number
        term: string | null
        friend: boolean | null
        [key: string]: any
    }

    useEffect(() => {
        const result: resultType = {} as resultType

        for (const [key, value] of searchParams.entries() as any) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else if (value === 'false') {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = {friend, term}

        dispatch(getUsersTC(actualPage, pageSize, actualFilter) as unknown as AnyAction)
    }, [])

    return (
        <div>
            {isFetching ? <Preloader/> : <Users/>}

        </div>
    )
}


export default UsersPage