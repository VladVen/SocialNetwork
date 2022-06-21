import {addMessage, onMessageChanger} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialogueMemberClass from "./dialogueMemberClass";


const mapStateToProps = (state) => {
    return {
        dialoguesData: state.messagesPage.dialoguesData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }


}
const mapDispatchToProps =  {
        addMessage,
        onMessageChanger
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(dialogueMemberClass)

export default DialoguesContainer