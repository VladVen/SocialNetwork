import {setAuthTC} from "./authReducer";
import {CommonThunkType, InferActionType} from "../reduxStore";
import {chatApi, ChatMessageType} from "../../API/chat-api";

const GET_MESSAGES = 'chat/GET_MESSAGES'


const initialState = {
    messages: [] as ChatMessageType[]
}
type initialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        default:
            return state
    }
}
type ActionsType = InferActionType<typeof actions>


const actions = {
    getMessages: (messages: ChatMessageType[]) => ({
        type: GET_MESSAGES,
        payload: messages
    })
}


type ThunkType = CommonThunkType<ActionsType, void>


export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe((messages) => {
        dispatch(actions.getMessages(messages))
    })
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.stop()
    chatApi.unsubscribe((messages) => {
        dispatch(actions.getMessages(messages))
    })
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}


export default appReducer