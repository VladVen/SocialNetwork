import React from "react";
import style from "./dialogues.module.css";
import DialogueMembers from "./DialogueMembers";
import Message from "./Message";
import AddMessageForm from "./AddMessageForm";
import {Props} from "./dialoguesContainer";


const dialoguePage: React.FC<Props> = (props) => {
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}> {
                props.dialoguesData.map(dialogues => <DialogueMembers key={dialogues.id}
                                                                      name={dialogues.name}
                                                                      id={dialogues.id}/>)
            }
            </div>
            <div className={style.messages}> {
                props.messagesData.map(messages => <Message key={messages.id}
                                                            message={messages.message}
                />)
            }
                <div>
                    <AddMessageForm addMessage={props.addMessage}/>
                </div>
            </div>
        </div>

    )
}


export default dialoguePage