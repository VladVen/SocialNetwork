


export type contactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
    [key: string]: string | null
}
export type photosType = {
    small: string | null
    large: string | null
}
export type postDataType = {
    id: number, message: string, likes: number, dislikes: number
}
export type profileDataType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: photosType
}

export type UpdateProfileDataType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
}

export type usersDataType = {
    name: string ,
    id: number,
    photos: photosType,
    status: string | null,
    followed: boolean
}


export type dialoguesDataType = {
    id: number, name: string
}
export type messagesDataType = {
    id: number, message: string
}

