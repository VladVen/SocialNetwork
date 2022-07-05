import {profileAPI} from "../../API/api";

let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    UPDATE_POST_AREA: 'UPDATE-POST-AREA',
    setFetching: 'SET_FETCHING',
    setUserProfile: 'SET_USER_PROFILE',
    setProfileStatus: 'SET_PROFILE_STATUS'
}
let n = 1
let reserveState = {
    profileData: null,
    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'Crimea is ours', likes: 100, dislikes: 5},
        {id: n++, message: 'Венгы пидоры', likes: 456, dislikes: 165},
        {id: n++, message: 'Русские пидоры', likes: 456, dislikes: 165}
    ],
    newPostText: '',
    status: '',
}

const profilePageReducer = (state = reserveState, action) => {
    switch (action.type) {
        case(actionType.ADD_NEW_POST):
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: n++, message: state.newPostText, likes: 0, dislikes: 0}]
            }
        case(actionType.UPDATE_POST_AREA):
            return {
                ...state,
                newPostText: action.postText
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

export const addPost = () => ({
    type: actionType.ADD_NEW_POST
})
export const onPostChanger = (text) => ({
    type: actionType.UPDATE_POST_AREA,
    postText: text
})
export const setUserProfile = (profile) => ({
    type: actionType.setUserProfile,
    profile
})
export const setProfileStatus = (status) => ({
    type: actionType.setProfileStatus,
    status
})


export const getProfileTC = (userId = 24409) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getProfileStatusTC = (userId = 24409) => {
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