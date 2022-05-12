import React from "react";


let sendMessage = (props) => {
    const newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch({type: 'ADD-NEW-MESSAGE'})
    }
    let onMessageChanger = () => {
        let text = newMessageElement.current.value
        props.dispatch({
            type: 'UPDATE-MESSAGE-AREA',
            messageText: text
        })
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