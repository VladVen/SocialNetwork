import {addMessageActionCreator, onMessageChangerActionCreator} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialogueMemberClass from "./dialogueMemberClass";


const mapStateToProps = (state) => {
    return {
        dialoguesData: state.messagesPage.dialoguesData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChanger: (text) => {
            dispatch(onMessageChangerActionCreator(text))

        }
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(dialogueMemberClass)

export default DialoguesContainer