import style from "./dialogues.module.css";
import {NavLink} from "react-router-dom";

const DialogueMembers = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={style.dialogueMembers} >
            <NavLink to={path}  className = { navData => navData.isActive ? style.active : style.dialogueMembers }>{props.name}</NavLink>
        </div>
    )
}
let dialoguesData = [
    {id: 1, name: 'Jenya'},
    {id: 2, name: 'Juliya'},
    {id: 3, name: 'Vitalik'},
    {id: 4, name: 'Egor'}
]

let compiledDialoguesData = () => (dialoguesData
    .map(dialogues => <DialogueMembers name={dialogues.name} id={dialogues.id}  />))

export default compiledDialoguesData