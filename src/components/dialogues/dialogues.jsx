import style from './dialogues.module.css'
import CompiledDialoguesData from "./dialoguesComponents/compiledDialoguesData";
import CompiledMessagesData from "./messagesComponents/compiledMessagesData";
import SendMessage from "./messagesComponents/sendMessage";


const Dialogues = (props) => {


    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames} >
                <CompiledDialoguesData dialoguesData={props.dialoguesData} />
            </div>
            <div className={style.messages}>
                <CompiledMessagesData messagesData={props.messagesData} />
                <SendMessage messagesData={props.messagesData}
                             newMessageText={props.newMessageText}
                             dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogues