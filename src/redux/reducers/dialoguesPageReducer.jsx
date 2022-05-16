let actionType = {
    ADD_NEW_MESSAGE: 'ADD-NEW-MESSAGE',
    UPDATE_MESSAGE_AREA: 'UPDATE-MESSAGE-AREA',
}
export const addMessageActionCreator = () => ({
    type: actionType.ADD_NEW_MESSAGE
})
export const onMessageChangerActionCreator = (text) => ({
    type: actionType.UPDATE_MESSAGE_AREA,
    messageText: text
})

let reserveState = {
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


const dialoguesPageReducer = (state = reserveState, action) => {

    switch (action.type) {
        case (actionType.ADD_NEW_MESSAGE) :
            let newMessage = {id: 5, message: state.newMessageText}
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case (actionType.UPDATE_MESSAGE_AREA):
            state.newMessageText = action.messageText
            return state
        default:
            return state
    }
}
export default dialoguesPageReducer