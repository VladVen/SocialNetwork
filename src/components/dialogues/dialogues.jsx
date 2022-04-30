import style from './dialogues.module.css'
import CompiledDialoguesData from "./dialoguesComponents/compiledDialoguesData";
import CompiledMessagesData from "./messagesComponents/compiledMessagesData";


const Dialogues = (props) => {


    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames} >
                <CompiledDialoguesData dialoguesData={props.dialoguesData} />
            </div>
            <div className={style.messages}>
                <CompiledMessagesData messagesData={props.messagesData} />
            </div>
        </div>
    )
}

export default Dialogues