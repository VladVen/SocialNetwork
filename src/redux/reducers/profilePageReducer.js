import {profileAPI} from "../../API/api";

let actionType = {
    ADD_NEW_POST: 'profile/ADD-NEW-POST',
    setFetching: 'profile/SET_FETCHING',
    setUserProfile: 'profile/SET_USER_PROFILE',
    setProfileStatus: 'profile/SET_PROFILE_STATUS',
    deletePost: 'profile/DELETE_POST',
    putPhoto: 'profile/PUT_PHOTO',
    catchError: 'profile/CATCH_ERROR',

}
let n = 1
let initialState = {
    profileData: null,
    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'i start developing my own social network', likes: 456, dislikes: 165},
        {id: n++, message: 'it is so easy', likes: 456, dislikes: 165}
    ],
    newPostText: '',
    status: '',
    errorMessage: null,
    error: false
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionType.ADD_NEW_POST):
            let text = action.newPostText
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: n++, message: text, likes: 0, dislikes: 0}]
            }
        case(actionType.deletePost):
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }
        case(actionType.setUserProfile):
            return {
                ...state,
                profileData: action.profile,
                errorMessage: null,
                error: false
            }
        case(actionType.setProfileStatus):
            return {
                ...state,
                status: action.status
            }
        case(actionType.putPhoto):
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            }
        case(actionType.catchError):
            return {
                ...state,
                errorMessage: action.error,
                error: true
            }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({
    type: actionType.ADD_NEW_POST,
    newPostText
})
export const deletePost = (postId) => ({
    type: actionType.deletePost,
    postId
})

export const setUserProfile = (profile) => ({
    type: actionType.setUserProfile,
    profile
})
export const setProfileStatus = (status) => ({
    type: actionType.setProfileStatus,
    status
})
export const putPhoto = (photos) => ({
    type: actionType.putPhoto,
    photos
})
export const catchError = (error) => ({
    type: actionType.catchError,
    error
})


export const getProfileTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getProfileStatusTC = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(data))

}
export const updateProfileStatusTC = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
export const uploadNewAvatar = (photo) => async (dispatch) => {
    let data = await profileAPI.uploadAvatar(photo)
    if (data.resultCode === 0) {
        dispatch(putPhoto(data.data.photos))
    }
}
export const updateProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getProfileTC(userId))
    } else {
        dispatch(catchError(data.messages))
    }
}

export default profilePageReducer