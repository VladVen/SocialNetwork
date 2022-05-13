let store = {
    _subscribeResult() {

    },
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello world!!!', likes: 85, dislikes: 1},
                {id: 2, message: 'Slava Ukraine', likes: 105, dislikes: 15},
                {id: 3, message: 'Crimea is ours', likes: 100, dislikes: 5},
                {id: 4, message: 'Русские пидоры', likes: 456, dislikes: 165},
                {id: 5, message: 'Русские пидоры', likes: 456, dislikes: 165}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialoguesData: [
                {id: 1, name: 'Jenya'},
                {id: 2, name: 'Juliya'},
                {id: 3, name: 'Vitalik'},
                {id: 4, name: 'Egor'}
            ],
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'How are you ?'},
                {id: 3, message: 'Slava Ukraine!!!'},
                {id: 4, message: 'Fuck off'}
            ],
            newMessageText: ''
        }
    },

    subscribe(observer) {
        this._subscribeResult = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === actionType.ADD_NEW_POST) {
            let newPost = {id: 6, message: this._state.profilePage.newPostText, likes: 0, dislikes: 0}
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._subscribeResult(this.getState())
        }
        else if (action.type === actionType.ADD_NEW_MESSAGE) {
            let newMessage = {id: 5, message: this._state.messagesPage.newMessageText}
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._subscribeResult(this.getState())
        }
        else if (action.type === actionType.UPDATE_POST_AREA) {
            this._state.profilePage.newPostText = action.postText
            this._subscribeResult(this.getState())
        }
        else if (action.type === actionType.UPDATE_MESSAGE_AREA) {
            this._state.messagesPage.newMessageText = action.messageText
            this._subscribeResult(this.getState())
        }

    }
}
export const addPostActionCreator = () => ({
    type: actionType.ADD_NEW_POST
})
export const onPostChangerActionCreator = (text) => ({
    type: actionType.UPDATE_POST_AREA,
    postText: text
})
export const addMessageActionCreator = () => ({
    type: actionType.ADD_NEW_MESSAGE
})
export const onMessageChangerActionCreator = (text) => ({
    type: actionType.UPDATE_MESSAGE_AREA,
    postText: text
})
let actionType = {
    ADD_NEW_POST: 'ADD-NEW-POST',
    UPDATE_POST_AREA: 'UPDATE-POST-AREA',
    ADD_NEW_MESSAGE: 'ADD-NEW-MESSAGE',
    UPDATE_MESSAGE_AREA: 'UPDATE-MESSAGE-AREA',
}
window.store = store

export default store