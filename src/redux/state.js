let store = {
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
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
    get getState () {
        return this._state
    },
    addNewPost () {
        let newPost = {id: 5, message: this.getState.profilePage.newPostText, likes: 0, dislikes: 0}
        this.getState.profilePage.postData.push(newPost)
        this.getState.profilePage.newPostText = ''
        this.rerenderEntireTree(this.getState)
    },
    addNewMessage() {
        let newMessage = {id: 5, message: this.getState.messagesPage.newMessageText}
        this.getState.messagesPage.messagesData.push(newMessage)
        this.getState.messagesPage.newMessageText = ''
        this.rerenderEntireTree(this.getState)
    },
    updatePostArea(postText) {
        this.getState.profilePage.newPostText = postText
        this.rerenderEntireTree(this.getState)
    },
    updateMessageArea (messageText) {
        this.getState.messagesPage.newMessageText = messageText
        this.rerenderEntireTree(this.getState)
    }
}


export default store