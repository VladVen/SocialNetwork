import style from "../dialogues.module.css";
import {NavLink} from "react-router-dom";

const DialogueMembers = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={style.dialogueMembers} >
            <NavLink to={path}  className = { navData => navData.isActive ? style.active : style.dialogueMembers }>{props.name}</NavLink>
        </div>
    )
}


let compiledDialoguesData = (props) => (props.dialoguesData.map(dialogues => <DialogueMembers name={dialogues.name} id={dialogues.id}  />))

export default compiledDialoguesData