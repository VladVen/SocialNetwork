let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    UPDATE_POST_AREA: 'UPDATE-POST-AREA',
}
export const addPostActionCreator = () => ({
    type: actionType.ADD_NEW_POST
})
export const onPostChangerActionCreator = (text) => ({
    type: actionType.UPDATE_POST_AREA,
    postText: text
})

let reserveState =  {
    postData: [
        {id: 1, message: 'Hello world!!!', likes: 85, dislikes: 1},
        {id: 2, message: 'Slava Ukraine', likes: 105, dislikes: 15},
        {id: 3, message: 'Crimea is ours', likes: 100, dislikes: 5},
        {id: 4, message: 'Венгы пидоры', likes: 456, dislikes: 165},
        {id: 5, message: 'Русские пидоры', likes: 456, dislikes: 165}
    ],
    newPostText: ''
}

const profilePageReducer = (state = reserveState, action) => {

    switch (action.type) {
        case(actionType.ADD_NEW_POST):
            let newPost = {id: 6, message: state.newPostText, likes: 0, dislikes: 0}
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case(actionType.UPDATE_POST_AREA):
            state.newPostText = action.postText
            return state
        default:
            return state
    }

}
export default profilePageReducer