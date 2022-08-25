import style from "./dialogues.module.css";
import React from "react";

type Props = {
    message: string
}

const Message: React.FC<Props> = ({message}) => {
    return (
        <div className={style.message}>
            {message}
        </div>
    )
}

export default Message