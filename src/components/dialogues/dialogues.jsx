import style from './dialogues.module.css'
import CompiledDialoguesData from "./dialoguesComponents/compiledDialoguesData";
import CompiledMessagesData from "./messagesComponents/compiledMessagesData";


const Dialogues = () => {


    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                <CompiledDialoguesData />
            </div>
            <div className={style.messages}>
                <CompiledMessagesData/>
            </div>
        </div>
    )
}

export default Dialogues