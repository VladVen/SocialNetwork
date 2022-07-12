let actionType = {
    ADD_NEW_MESSAGE: 'ADD-NEW-MESSAGE',
}

let nd = 1
let nm = 1
let initialState = {
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
}


const dialoguesPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case (actionType.ADD_NEW_MESSAGE) :
            let text = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, {id: nm++, message: text } ]
            }

        default:
            return state
    }
}
export const addMessage = (newMessageText) => ({
    type: actionType.ADD_NEW_MESSAGE,
    newMessageText
})

export default dialoguesPageReducer