import style from "../dialogues.module.css";
import {NavLink} from "react-router-dom";
import {dialoguesData} from "../../../index";

const DialogueMembers = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={style.dialogueMembers} >
            <NavLink to={path}  className = { navData => navData.isActive ? style.active : style.dialogueMembers }>{props.name}</NavLink>
        </div>
    )
}


let compiledDialoguesData = () => (dialoguesData
    .map(dialogues => <DialogueMembers name={dialogues.name} id={dialogues.id}  />))

export default compiledDialoguesData