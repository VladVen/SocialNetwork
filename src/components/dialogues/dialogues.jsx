import style from './dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueMembers = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={style.dialogueMembers + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}




const Dialogues = () => {

    let DialoguesData = [
        {id: 1, name: 'Jenya'},
        {id: 2, name: 'Juliya'},
        {id: 3, name: 'Vitalik'},
        {id: 4, name: 'Egor'}
    ]

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Slava Ukraine!!!'},
        {id: 4, message: 'Fuck off'}
    ]
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                <DialogueMembers name={DialoguesData[0].name} id={DialoguesData[0].id}/>
                <DialogueMembers name={DialoguesData[1].name} id={DialoguesData[1].id}/>
                <DialogueMembers name={DialoguesData[2].name} id={DialoguesData[2].id}/>
                <DialogueMembers name={DialoguesData[3].name} id={DialoguesData[3].id}/>

            </div>
            <div className={style.messages}>
                <Message message={MessagesData[0].message} id={MessagesData[0].id}/>
                <Message message={MessagesData[1].message} id={MessagesData[1].id}/>
                <Message message={MessagesData[2].message} id={MessagesData[2].id}/>
                <Message message={MessagesData[3].message} id={MessagesData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogues