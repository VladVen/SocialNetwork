import Dialogues from "./dialogues";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
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

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer