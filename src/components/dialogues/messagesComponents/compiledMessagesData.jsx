import style from "../dialogues.module.css";
import {messagesData} from "../../../index";

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}



let compiledMessagesData = (props) => (props.messagesData.map(messages => <Message message={messages.message} id={messages.id}/>))

export default compiledMessagesData