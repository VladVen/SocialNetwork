import style from './dialogues.module.css'
import CompiledDialoguesData from "./compiledDialoguesData";
import CompiledMessagesData from "./compiledMessagesData";


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