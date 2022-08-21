const ADD_NEW_MESSAGE = 'dialogues/ADD-NEW-MESSAGE'


type dialoguesDataType = {
    id: number, name: string
}
type messagesData = {
    id: number, message: string
}

let nd = 1
let nm = 1
const initialState = {
    dialoguesData: [
        {id: nd++, name: 'Jenya'},
        {id: nd++, name: 'Juliya'},
        {id: nd++, name: 'Vitalik'},
        {id: nd++, name: 'Egor'}
    ] as Array<dialoguesDataType>,
    messagesData: [
        {id: nm++, message: 'hi'},
        {id: nm++, message: 'How are you ?'},
        {id: nm++, message: 'Slava Ukraine!!!'},
        {id: nm++, message: 'Fuck off'}
    ] as Array<messagesData>,
}

type initialStateType = typeof initialState


const dialoguesPageReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_NEW_MESSAGE :
            const text = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, {id: nm++, message: text}]
            }

        default:
            return state
    }
}
type addMessageType = {
    type: typeof ADD_NEW_MESSAGE
    newMessageText: string
}

export const addMessage = (newMessageText: string): addMessageType => ({
    type: ADD_NEW_MESSAGE,
    newMessageText
})

export default dialoguesPageReducer