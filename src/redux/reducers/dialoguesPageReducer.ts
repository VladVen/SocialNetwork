import {dialoguesDataType,  messagesDataType} from "../../types/types";
import {InferActionType} from "../reduxStore";

const ADD_NEW_MESSAGE = 'dialogues/ADD-NEW-MESSAGE'




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
    ] as Array<messagesDataType>,
}

type initialStateType = typeof initialState


const dialoguesPageReducer = (state = initialState, action: ActionsType): initialStateType => {

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
type ActionsType = InferActionType<typeof actions>

export const actions = {
    addMessage: (newMessageText: string) => ({
        type: ADD_NEW_MESSAGE,
        newMessageText
    } as const)
}



export default dialoguesPageReducer