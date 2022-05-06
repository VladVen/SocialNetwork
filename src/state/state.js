import rerenderEntireTree from "../render";

let state = {

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
}

export const addNewPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likes: 0, dislikes: 0}
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}

export const addNewMessage = () => {
    let newMessage = {id: 5, message: state.messagesPage.newMessageText}
    state.messagesPage.messagesData.push(newMessage)
    rerenderEntireTree(state)
}

export const updatePostArea = (postText) => {
    state.profilePage.newPostText = postText
    rerenderEntireTree(state)
}
export const updateMessageArea = (messageText) => {
    state.messagesPage.newMessageText = messageText
    rerenderEntireTree(state)
}



export default state