import style from "./dialogues.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogueMembers = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={style.dialogueMembers}>
            <NavLink to={path}
                     className={navData => navData.isActive ? style.active : style.dialogueMembers}>{props.name}</NavLink>
        </div>
    )
}
export default DialogueMembers