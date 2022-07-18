import {profileAPI} from "../../API/api";

let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    setFetching: 'SET_FETCHING',
    setUserProfile: 'SET_USER_PROFILE',
    setProfileStatus: 'SET_PROFILE_STATUS',
    deletePost: 'DELETE_POST'
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
                profileData: action.profile
            }
        case(actionType.setProfileStatus):
            return {
                ...state,
                status: action.status
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


export const getProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getProfileStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setProfileStatus(data))
            })
    }
}
export const updateProfileStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export default profilePageReducer