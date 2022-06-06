import Dialogues from "./dialogues";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
            dialoguesData: state.messagesPage.dialoguesData,
            messagesData: state.messagesPage.messagesData
        }


}
const mapDispatchToProps = (dispatch) => {
    return {
            addMessage:  () => {
                dispatch(addMessageActionCreator())
            },
            onMessageChanger: (text) => {
                dispatch(onMessageChangerActionCreator(text))

            }
        }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer