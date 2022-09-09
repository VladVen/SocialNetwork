import React, {useEffect, useState} from "react";
import {Messages} from "./Messages";
import {SendMessageForm} from "./SendMessageForm";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../redux/reducers/chatReducer";
import {AnyAction} from "redux";
import {Navigate} from "react-router-dom";
import {getIsAuth} from "../../redux/selectors/authSelector";


const ChatPage: React.FC = React.memo(() => {

    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening() as unknown as AnyAction)
        return () => {
            dispatch(stopMessagesListening() as unknown as AnyAction)
        }
    }, [])

    if (!isAuth){
        return <Navigate to={'/login'}/>
    }

    return <div>
        <div style={{height: 500, overflowY: 'auto'}}>
            <Messages />
        </div>
        <SendMessageForm />
    </div>
})


export default ChatPage