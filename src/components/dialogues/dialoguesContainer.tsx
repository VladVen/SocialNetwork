import {actions} from "../../redux/reducers/dialoguesPageReducer";
import {connect} from "react-redux";
import dialoguePage from "./dialoguePage";
import React from "react";
import withAuthRedirect from "../../common/HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {dialoguesDataType, messagesDataType} from "../../types/types";


type MapState = {
    dialoguesData: Array<dialoguesDataType>
    messagesData: Array<messagesDataType>,
}
type MapDispatch = {
    addMessage: (title: string) => void
}
type MyOwnProps = {}

export type Props = MapState & MapDispatch & MyOwnProps


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
    connect<MapState, MapDispatch, MyOwnProps,  AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    // @ts-ignore
)(dialoguePage)