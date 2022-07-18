import style from "./dialogues.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogueMembers = ({id, name}) => {
    let path = '/dialogues/' + id

    return (
        <div className={style.dialogueMembers}>
            <NavLink to={path}
                     className={navData => navData.isActive ? style.active : style.dialogueMembers}>{name}</NavLink>
        </div>
    )
}

export default DialogueMembers