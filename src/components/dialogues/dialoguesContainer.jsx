import {addMessage} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialoguePage from "./dialoguePage";
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
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(dialoguePage)