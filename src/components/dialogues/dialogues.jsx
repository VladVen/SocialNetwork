import style from './dialogues.module.css'
import {NavLink} from "react-router-dom";

const Dialogues = () => {
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                <div className={style.dialogueMembers + ' ' + style.active}>
                    <NavLink to='/dialogues/jenya'>Jenya</NavLink>
                </div>
                <div className={style.dialogueMembers}>
                    <NavLink to='/dialogues/juliya'>Juliya</NavLink>
                </div>
                <div className={style.dialogueMembers}>
                    <NavLink to='/dialogues/vitalik'>Vitalik</NavLink>
                </div>
                <div className={style.dialogueMembers}>
                    <NavLink to='/dialogues/egor'>Egor</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    hi
                </div>
                <div className={style.message}>
                    hello
                </div>
                <div className={style.message}>
                    how are you
                </div>
                <div className={style.message}>
                    Fuck off
                </div>
            </div>
        </div>
    )
}

export default Dialogues