import {photosType, profileDataType, UpdateProfileDataType} from "../types/types";
import {DefaultResponse, instance} from "./api";

type UploadAvatar =  {
    photos: photosType
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
    uploadAvatar(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<DefaultResponse<UploadAvatar>>(`profile/photo`, formData, {
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