import style from './modal.module.css'
import ReactDom from 'react-dom'


const Modal = ({isOpen, children, onclose}) => {
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