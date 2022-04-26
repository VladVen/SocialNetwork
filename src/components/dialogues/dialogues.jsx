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
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                <DialogueMembers name='Jenya' id='1'/>
                <DialogueMembers name='Juliya' id='2'/>
                <DialogueMembers name='Vitalik' id='3'/>
                <DialogueMembers name='Egor' id='4'/>

            </div>
            <div className={style.messages}>
               <Message message='Hi'/>
               <Message message='How are you ?'/>
               <Message message='Slava Ukraine'/>
               <Message message='Fuck off'/>
            </div>
        </div>
    )
}

export default Dialogues