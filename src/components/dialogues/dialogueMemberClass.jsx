import React from "react";
import style from "./dialogues.module.css";
import DialogueMembers from "./DialogueMembers";
import Message from "./Message";


class dialogueMemberClass extends React.Component {
    addMessage = () => {
        this.props.addMessage()
    }
    onMessageChanger = (event) => {
        let text = event.currentTarget.value
        this.props.onMessageChanger(text)

    }

    render() {
        return (
            <div className={style.dialogues}>
                <div className={style.dialoguesNames}> {
                    this.props.dialoguesData.map(dialogues => <DialogueMembers key={dialogues.id}
                                                                               name={dialogues.name}
                                                                               id={dialogues.id}/>)
                }
                </div>
                <div className={style.messages}> {
                    this.props.messagesData.map(messages => <Message key={messages.id}
                                                                     message={messages.message}
                                                                     id={messages.id}/>)
                }
                    <div>
                    <textarea
                        value={this.props.newMessageText}
                        onChange={this.onMessageChanger}
                        placeholder='Enter your message'
                    />
                        <button onClick={this.addMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default dialogueMemberClass