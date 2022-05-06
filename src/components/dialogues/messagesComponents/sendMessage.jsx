import React from "react";


let sendMessage = (props) => {
    const newMessageElement = React.createRef()

    let addMessage = () => {
        props.addNewMessage()
        props.updateMessageArea('')
    }
    let onMessageChanger = () => {
        let text = newMessageElement.current.value
        props.updateMessageArea(text)
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