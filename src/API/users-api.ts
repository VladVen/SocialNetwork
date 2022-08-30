import {usersDataType} from "../types/types";
import {DefaultResponse, instance} from "./api";

export type getUsers = {
    items: Array<usersDataType>
    totalCount: number
    error: string
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
        return instance.get<getUsers>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)
        )
            .then(response => response.data)
    },
}
export const followAPI = {
    delFollow(usersId: number) {
        return instance.delete<DefaultResponse>(`follow/${usersId}`)
            .then(response => response.data)
    },
    addFollow(usersId: number) {
        return instance.post<DefaultResponse>(`follow/${usersId}`)
            .then(response => response.data)
    }
}