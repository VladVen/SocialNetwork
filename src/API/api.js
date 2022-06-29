import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-Key": "c4eac98f-e206-4543-a154-529053d6be82"
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => response.data)
    }
}

export const followAPI = {
    delFollow (usersId) {
        return instance.delete(`follow/${usersId}`)
            .then(response => response.data)
    },
    addFollow (usersId) {
        return instance.post(`follow/${usersId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}
