import axios from "axios";
import {photosType, profileDataType, UpdateProfileDataType, usersDataType} from "../types/types";


export enum ResultCodes {
    success = 0,
    error = 1,
    captcha = 10
}


type DefaultResponse = {
    resultCode: ResultCodes
    messages: Array<string>
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-Key": "c4eac98f-e206-4543-a154-529053d6be82"
    }
})

type getUsers = {
    items: Array<usersDataType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsers>(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => response.data)
    }
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


type UploadAvatar = DefaultResponse & {
    data: { photos: photosType }
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<profileDataType>(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string | null>(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<DefaultResponse>(`profile/status`, {
            status
        })
            .then(response => response.data)
    },
    uploadAvatar(photo: any) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<UploadAvatar>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    updateProfile(profile: UpdateProfileDataType) {
        return instance.put<DefaultResponse>(`profile`,
            profile
        )
            .then(response => response.data)
    },
}


type getAuth = DefaultResponse & {
    data: {
        id: number
        login: string
        email: string
    }
}
type logIn = DefaultResponse & {
    data: {
        userId: number
    }
}
type getCaptcha = DefaultResponse & {
    url: string
}

export const authAPI = {
    getAuth() {
        return instance.get<getAuth>(`auth/me`)
            .then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<logIn>(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logOut() {
        return instance.delete<DefaultResponse>(`/auth/login`)
            .then(response => response.data)
    },
    getCaptcha() {
        return instance.get<getCaptcha>('/security/get-captcha-url')
            .then(response => response.data)
    }
}

