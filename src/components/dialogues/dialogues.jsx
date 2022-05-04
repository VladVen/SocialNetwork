import style from './dialogues.module.css'
import CompiledDialoguesData from "./dialoguesComponents/compiledDialoguesData";
import CompiledMessagesData from "./messagesComponents/compiledMessagesData";
import SendMessage from "./messagesComponents/sendMessage";
import {addNewMessage} from "../../state/state";


const Dialogues = (props) => {


    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames} >
                <CompiledDialoguesData dialoguesData={props.dialoguesData} />
            </div>
            <div className={style.messages}>
                <CompiledMessagesData messagesData={props.messagesData} />
                <SendMessage messagesData={props.messagesData} addNewMessage={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogues