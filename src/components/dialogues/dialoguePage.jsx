import React from "react";
import style from "./dialogues.module.css";
import DialogueMembers from "./DialogueMembers";
import Message from "./Message";
import AddMessageForm from "./AddMessageForm";



class dialoguePage extends React.Component {
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
                   <AddMessageForm addMessage={this.props.addMessage}/>
                                </div>
                            </div>
                        </div>

        )
    }
}



export default dialoguePage