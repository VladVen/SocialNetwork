import React from "react";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../../redux/reducers/dialoguesPageReducer";



let sendMessage = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChanger = (event) => {
        let text = event.currentTarget.value
        props.dispatch(onMessageChangerActionCreator(text))

    }
    return (
        <div>
        <textarea
            value={props.newMessageText}
            onChange={onMessageChanger}
            placeholder='Enter your message'
        />
            <button onClick={addMessage}>Send Message</button>
        </div>
    )
}
export default sendMessage