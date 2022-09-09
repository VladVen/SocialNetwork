import React from "react";
import {Avatar} from "antd";
import ava from '../images/tempAva.png'
import {ChatMessageType} from "../../API/chat-api";
import {useNavigate} from "react-router-dom";

type Props = {
    message: ChatMessageType
}


export const MessageTemplate: React.FC<Props> = React.memo(({message}) => {

    const navigate = useNavigate()

    return <div style={{width: 300, height: 80, backgroundColor: '#eee', marginBottom: 10, borderRadius: 10,}}>
        <div style={{display: "flex", flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
        <div style={{paddingBottom: 10, paddingTop: 5, paddingLeft: 5, justifyContent: "flex-start", width: '100%', cursor: 'pointer'}}
             onClick={() => navigate(`/profile/${message.userId}`)}
        >
            <Avatar src={message.photo ? message.photo : ava} /> <b>{message.userName}</b>
        </div>
        <div style={{ paddingLeft: 45, justifyContent: "flex-start", width: '100%'}} >
            {message.message}
        </div>
        </div>
    </div>
})

