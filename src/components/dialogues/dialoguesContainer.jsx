import {addMessage, onMessageChanger} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialogueMemberClass from "./dialogueMemberClass";
import React from "react";
import withAuthRedirect from "../common/HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialoguesData: state.messagesPage.dialoguesData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }


}
const mapDispatchToProps = {
    addMessage,
    onMessageChanger
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(dialogueMemberClass)