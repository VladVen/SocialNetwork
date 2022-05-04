import React from "react";


let sendMessage = (props) => {
    const newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        props.addNewMessage(text)
        newMessageElement.current.value = ' '
    }
    return(
    <div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Send Message</button>
    </div>
    )
}
export default sendMessage