import {profileAPI} from "../../API/api";
import {postDataType, profileDataType} from "../../types/types";


const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const SET_FETCHING = 'profile/SET_FETCHING'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const PUT_PHOTO = 'profile/PUT_PHOTO'
const CATCH_ERRORS = 'profile/CATCH_ERROR'




let n = 1
const initialState  = {
    profileData: null as profileDataType | null,
    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'i start developing my own social network', likes: 456, dislikes: 165},
        {id: n++, message: 'it is so easy', likes: 456, dislikes: 165}
    ] as  Array<postDataType>,
    newPostText: '' ,
    status: '' ,
    errorMessage: null as string | null,
}
type initialStateType = typeof initialState

const profilePageReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let text = action.newPostText
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: n++, message: text, likes: 0, dislikes: 0}]
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profile,
                errorMessage: null,
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case PUT_PHOTO:
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos} as profileDataType
            }
        case CATCH_ERRORS:
            return {
                ...state,
                errorMessage: action.error,
            }
        default:
            return state
    }
}

type addPostType = {
    type: typeof ADD_NEW_POST,
    newPostText: string
}

export const addPost = (newPostText: string): addPostType => ({
    type: ADD_NEW_POST,
    newPostText
})

type deleteType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number):deleteType => ({
    type: DELETE_POST,
    postId
})

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: profileDataType
}
 const setUserProfile = (profile: profileDataType): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})

type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}

 const setProfileStatus = (status: string): setProfileStatusType => ({
    type: SET_PROFILE_STATUS,
    status
})

type putPhotoType = {
    type: typeof PUT_PHOTO,
    photos: string
}

 const putPhoto = (photos: string):putPhotoType => ({
    type: PUT_PHOTO,
    photos
})

type catchErrorType = {
    type: typeof CATCH_ERRORS,
    error: string
}

 const catchError = (error: string):catchErrorType => ({
    type: CATCH_ERRORS,
    error
})


export const getProfileTC = (userId: string) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getProfileStatusTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(data))

}
export const updateProfileStatusTC = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
export const uploadNewAvatar = (photo: any) => async (dispatch: any) => {
    let data = await profileAPI.uploadAvatar(photo)
    if (data.resultCode === 0) {
        dispatch(putPhoto(data.data.photos))
    }
}
export const updateProfile = (profile: profileDataType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id
    let data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getProfileTC(userId))
    } else {
        dispatch(catchError(data.messages))
    }
}

export default profilePageReducer