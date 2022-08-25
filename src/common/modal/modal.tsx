import style from './modal.module.css'
import React from "react";

type Modal = {
    isOpen: boolean
    children: React.ReactNode,
    onclose: () => void
}

const Modal: React.FC<Modal> = ({isOpen, children, onclose}) => {
    if(!isOpen) return null
    return (
        <>
            <div className={style.modalBackground} />
        <div className={style.modal}>
            {children}
            <button onClick={onclose}>Close</button>
        </div>
        </>
    )
}

export default Modal