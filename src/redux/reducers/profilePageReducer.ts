import {profileAPI, ResultCodes} from "../../API/api";
import {photosType, postDataType, profileDataType, UpdateProfileDataType} from "../../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionType} from "../reduxStore";


const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const SET_FETCHING = 'profile/SET_FETCHING'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const PUT_PHOTO = 'profile/PUT_PHOTO'
const CATCH_ERRORS = 'profile/CATCH_ERROR'


let n = 1
const initialState = {
    profileData: null as profileDataType | null,
    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'i start developing my own social network', likes: 456, dislikes: 165},
        {id: n++, message: 'it is so easy', likes: 456, dislikes: 165}
    ] as Array<postDataType>,
    newPostText: '',
    status: null as string | null,
    errorMessage: null as string | null,
}
type initialStateType = typeof initialState

const profilePageReducer = (state = initialState, action: ActionsType): initialStateType => {
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
                profileData: {...state.profileData, photos: action.photos} as unknown as profileDataType
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

type ActionsType = InferActionType<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({
        type: ADD_NEW_POST,
        newPostText
    } as const),
    deletePost: (postId: number) => ({
        type: DELETE_POST,
        postId
    } as const),
    setUserProfile: (profile: profileDataType) => ({
        type: SET_USER_PROFILE,
        profile
    } as const),
    setProfileStatus: (status: string | null) => ({
        type: SET_PROFILE_STATUS,
        status
    } as const),
    putPhoto: (photos: photosType) => ({
        type: PUT_PHOTO,
        photos
    } as const),
    catchError: (error: string) => ({
        type: CATCH_ERRORS,
        error
    } as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


export const getProfileTC = (userId: number | null): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}
export const getProfileStatusTC = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setProfileStatus(data))

}
export const updateProfileStatusTC = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setProfileStatus(status))
    }
}
export const uploadNewAvatar = (photo: profileDataType): ThunkType => async (dispatch) => {
    let data = await profileAPI.uploadAvatar(photo)
    if (data.resultCode === 0) {
        dispatch(actions.putPhoto(data.data.photos))
    }
}
export const updateProfile = (profile: UpdateProfileDataType): ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.id
    let data = await profileAPI.updateProfile(profile)
    if (data.resultCode === ResultCodes.success) {
        await dispatch(getProfileTC(userId))
    } else {
        dispatch(actions.catchError(data.messages[0]))
    }
}

export default profilePageReducer