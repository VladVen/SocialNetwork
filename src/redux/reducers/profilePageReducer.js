let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    UPDATE_POST_AREA: 'UPDATE-POST-AREA',
}
export const addPostActionCreator = () => ({
    type: actionType.ADD_NEW_POST
})
export let onPostChangerActionCreator = (text) => ({
    type: actionType.UPDATE_POST_AREA,
    postText: text
})
let n = 1
let reserveState =  {

    postData: [
        {id: n++, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: n++, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: n++, message: 'Crimea is ours', likes: 100, dislikes: 5},
        {id: n++, message: 'Венгы пидоры', likes: 456, dislikes: 165},
        {id: n++, message: 'Русские пидоры', likes: 456, dislikes: 165}
    ],
    newPostText: ''
}

const profilePageReducer = (state = reserveState, action) => {
window.store = state
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
        default:
            return state
    }

}
export default profilePageReducer