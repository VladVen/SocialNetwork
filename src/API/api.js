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
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {
            status
        })
            .then(response => response.data)
    },
    uploadAvatar (photo) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}
export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    logIn ( email, password, rememberMe, captcha = null ) {
        return instance.post(`/auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data)
    },
    logOut () {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    },
    getCaptcha () {
        return instance.get( '/security/get-captcha-url')
            .then(response => response.data)
    }
}
