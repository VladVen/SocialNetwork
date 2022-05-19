import React from "react";



let sendMessage = (props) => {
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChanger = (text) => {
        props.onMessageChanger(text)

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