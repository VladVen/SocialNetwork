import style from './dialogues.module.css'
import SendMessageContainer from "./messagesComponents/sendMessageContainer";
import {NavLink} from "react-router-dom";


const Dialogues= (props) => {

    const DialogueMembers = (props) => {
        let path = '/dialogues/' + props.id

        return (
            <div className={style.dialogueMembers} >
                <NavLink to={path}  className = { navData => navData.isActive ? style.active : style.dialogueMembers }>{props.name}</NavLink>
            </div>
        )
    }
    let compiledDialoguesData = props.dialoguesData.map(dialogues => <DialogueMembers name={dialogues.name} id={dialogues.id}  />)

    const Message = (props) => {
        return (
            <div className={style.message}>
                {props.message}
            </div>
        )
    }
    let compiledMessagesData = props.messagesData.map(messages => <Message message={messages.message} id={messages.id}/>)


    return (
                        <div className={style.dialogues}>
                            <div className={style.dialoguesNames}>
                                {compiledDialoguesData}
                            </div>
                            <div className={style.messages}>
                                {compiledMessagesData}
                                <SendMessageContainer/>
                            </div>
                        </div>
    )
}

export default Dialogues