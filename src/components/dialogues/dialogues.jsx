import style from './dialogues.module.css'

const Dialogues = () => {
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesNames}>
                <div className={style.dialogueMembers + ' ' + style.active}>
                    Jenya
                </div>
                <div className={style.dialogueMembers}>
                    Julia
                </div>
                <div className={style.dialogueMembers}>
                    Vilatalyi
                </div>
                <div className={style.dialogueMembers}>
                    Egor
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