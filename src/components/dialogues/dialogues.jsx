import style from './dialogues.module.css'
import React from "react";
import Message from "./Message";
import DialogueMembers from "./DialogueMembers";


const Dialogues = (props) => {

    let state = props.messagesPage
    let emptyArea = state.newMessageText

    let compiledDialoguesData = state.dialoguesData.map(dialogues => <DialogueMembers name={dialogues.name}
                                                                                      id={dialogues.id}/>)
    let compiledMessagesData = state.messagesData.map(messages => <Message message={messages.message}
                                                                           id={messages.id}/>)
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChanger = (event) => {
        let text = event.currentTarget.value
        props.onMessageChanger(text)

    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                {compiledDialoguesData}
            </div>
            <div className={style.messages}>
                {compiledMessagesData}
                <div>
                    <textarea
                        value={emptyArea}
                        onChange={onMessageChanger}
                        placeholder='Enter your message'
                    />
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogues