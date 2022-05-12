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
    get getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            let newPost = {id: 6, message: this.getState.profilePage.newPostText, likes: 0, dislikes: 0}
            this.getState.profilePage.postData.push(newPost)
            this.getState.profilePage.newPostText = ''
            this._subscribeResult(this.getState)
        }
        else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {id: 5, message: this.getState.messagesPage.newMessageText}
            this.getState.messagesPage.messagesData.push(newMessage)
            this.getState.messagesPage.newMessageText = ''
            this._subscribeResult(this.getState)
        }
        else if (action.type === 'UPDATE-POST-AREA') {
            this.getState.profilePage.newPostText = action.postText
            this._subscribeResult(this.getState)
        }
        else if (action.type === 'UPDATE-MESSAGE-AREA') {
            this.getState.messagesPage.newMessageText = action.messageText
            this._subscribeResult(this.getState)
        }

    }
}
window.store=store

export default store