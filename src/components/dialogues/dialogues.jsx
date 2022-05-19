import style from './dialogues.module.css'
import CompiledDialoguesData from "./dialoguesComponents/compiledDialoguesData";
import CompiledMessagesData from "./messagesComponents/compiledMessagesData";
import SendMessageContainer from "./messagesComponents/sendMessageContainer";
import MyContext from "../../myContext";


const Dialogues = () => {


    return (
        <MyContext.Consumer >
            {
                (store) => {
                    let state = store.getState()
                    return (
                        <div className={style.dialogues}>
                            <div className={style.dialoguesNames}>
                                <CompiledDialoguesData dialoguesData={state.messagesPage.dialoguesData}/>
                            </div>
                            <div className={style.messages}>
                                <CompiledMessagesData messagesData={state.messagesPage.messagesData}/>
                                <SendMessageContainer/>
                            </div>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

export default Dialogues