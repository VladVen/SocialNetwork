import React from "react";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../../redux/state";


let sendMessage = (props) => {
    const newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChanger = () => {
        let text = newMessageElement.current.value
        props.dispatch(onMessageChangerActionCreator(text))
    }
    return (
        <div>
        <textarea
            ref={newMessageElement}
            value={props.newMessageText}
            onChange={onMessageChanger}
        />
            <button onClick={addMessage}>Send Message</button>
        </div>
    )
}
export default sendMessage