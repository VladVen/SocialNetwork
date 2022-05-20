import React from "react";
import {connect} from "react-redux";
import Dialogues from "./dialogues";
import {addMessageActionCreator, onMessageChangerActionCreator} from "../../redux/reducers/dialoguesPageReducer";

let mapStateToProps = (state) => {
    return (
        {
            messagesData: state.messagesPage.messagesData,
            dialoguesData: state.messagesPage.dialoguesData
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addMessage: () => {
                dispatch(addMessageActionCreator())
            },
            onMessageChanger: (text) => {
                dispatch(onMessageChangerActionCreator(text))
            }

        }
    )
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer