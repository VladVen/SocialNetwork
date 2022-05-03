import React from "react";


let sendMessage = () => {
    const newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }
    return(
    <div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Send Message</button>
    </div>
    )
}
export default sendMessage