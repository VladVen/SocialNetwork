import profilePageReducer from "./reducers/profilePageReducer";
import dialoguesPageReducer from "./reducers/dialoguesPageReducer";

let store = {
    _subscribeResult() {

    },
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello world!!!', likes: 85, dislikes: 1},
                {id: 2, message: 'Slava Ukraine', likes: 105, dislikes: 15},
                {id: 3, message: 'Crimea is ours', likes: 100, dislikes: 5},
                {id: 4, message: 'Венгы пидоры', likes: 456, dislikes: 165},
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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = dialoguesPageReducer(this._state.messagesPage, action)
        this._subscribeResult(this.getState())

    }
}

window.store = store

export default store