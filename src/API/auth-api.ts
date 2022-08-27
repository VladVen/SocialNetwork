import {DefaultResponse, instance, ResultCodes} from "./api";

type getAuth =  {
        id: number
        login: string
        email: string
}
type logIn =  {
        userId: number
}
type getCaptcha = {
    url: string
    resultCode: ResultCodes
    messages: Array<string>
}

export const authAPI = {
    getAuth() {
        return instance.get<DefaultResponse<getAuth>>(`auth/me`)
            .then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<DefaultResponse<logIn>>(`/auth/login`, {email, password, rememberMe, captcha})
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