import style from "./dialogues.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you ?'},
    {id: 3, message: 'Slava Ukraine!!!'},
    {id: 4, message: 'Fuck off'}
]

let compiledMessagesData = () => (messagesData.map(messages => <Message message={messages.message} id={messages.id}/>))

export default compiledMessagesData