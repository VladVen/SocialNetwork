let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    UPDATE_POST_AREA: 'UPDATE-POST-AREA',
    setFetching:'SET_FETCHING',
    setProfile: 'SET_PROFILE'
}
let n = 1
let reserveState =  {
    profileData: null,
    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'Crimea is ours', likes: 100, dislikes: 5},
        {id: n++, message: 'Венгы пидоры', likes: 456, dislikes: 165},
        {id: n++, message: 'Русские пидоры', likes: 456, dislikes: 165}
    ],
    newPostText: '',
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
            case(actionType.setProfile):
            return {
                ...state,
                profileData: action.profile
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

export const setProfile = (profile) => ({
    type: actionType.setProfile,
    profile
})

export default profilePageReducer