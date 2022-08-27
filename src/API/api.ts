import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-Key": "c4eac98f-e206-4543-a154-529053d6be82"
    }
})

export enum ResultCodes {
    success = 0,
    error = 1,
    captcha = 10
}


export type DefaultResponse<D = {}> = {
    data: D
    resultCode: ResultCodes
    messages: Array<string>
}

