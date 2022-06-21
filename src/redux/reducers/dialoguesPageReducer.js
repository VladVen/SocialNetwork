let actionType = {
    ADD_NEW_MESSAGE: 'ADD-NEW-MESSAGE',
    UPDATE_MESSAGE_AREA: 'UPDATE-MESSAGE-AREA',
}
export const addMessage = () => ({
    type: actionType.ADD_NEW_MESSAGE
})
export const onMessageChanger = (text) => ({
    type: actionType.UPDATE_MESSAGE_AREA,
    messageText: text
})
let nd = 1
let nm = 1
let reserveState = {
    dialoguesData: [
        {id: nd++, name: 'Jenya'},
        {id: nd++, name: 'Juliya'},
        {id: nd++, name: 'Vitalik'},
        {id: nd++, name: 'Egor'}
    ],
    messagesData: [
        {id: nm++, message: 'hi'},
        {id: nm++, message: 'How are you ?'},
        {id: nm++, message: 'Slava Ukraine!!!'},
        {id: nm++, message: 'Fuck off'}
    ],
    newMessageText: ''
}


const dialoguesPageReducer = (state = reserveState, action) => {

    switch (action.type) {
        case (actionType.ADD_NEW_MESSAGE) :
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: nm++, message: state.newMessageText} ]
            }
        case (actionType.UPDATE_MESSAGE_AREA):
            return {
                ...state,
                newMessageText: action.messageText
            }
        default:
            return state
    }
}
export default dialoguesPageReducer