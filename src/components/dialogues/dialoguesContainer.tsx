import {actions} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialoguePage from "./dialoguePage";
import React from "react";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {dialoguesDataType, messagesDataType} from "../../types/types";
import {withAuthRedirect} from "../../common/HOC/withAuthRedirect";


type MapState = {
    dialoguesData: Array<dialoguesDataType>
    messagesData: Array<messagesDataType>,
}
type MapDispatch = {
    addMessage: (title: string) => void
}

export type Props = MapState & MapDispatch


const mapStateToProps = (state: AppStateType): MapState => {
    return {
        dialoguesData: state.messagesPage.dialoguesData,
        messagesData: state.messagesPage.messagesData,
    }


}
const mapDispatchToProps = {
    addMessage: actions.addMessage,
}



export default compose(
    connect<MapState, MapDispatch, unknown,  AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(dialoguePage) as React.ComponentType