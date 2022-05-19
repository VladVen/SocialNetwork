import React from "react";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../../redux/reducers/dialoguesPageReducer";
import SendMessage from "./sendMessage";
import MyContext from "../../../myContext";



const sendMessageContainer = (props) => {

    return (
        <MyContext.Consumer >
            {
                (store) => {
                    let state = store.getState()

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const onMessageChanger = (event) => {
                        let text = event.currentTarget.value
                        store.dispatch(onMessageChangerActionCreator(text))

                    }
                    return (
                        <SendMessage onMessageChanger={onMessageChanger} addMessage={addMessage}
                                     messagesData={state.messagesPage.messagesData}
                                     newMessageText={state.messagesPage.newMessageText}/>
                    )
                }
            }
        </MyContext.Consumer>
    )
}
export default sendMessageContainer