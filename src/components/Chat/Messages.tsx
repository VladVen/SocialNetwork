import React from "react";
import {MessageTemplate} from "./MessageTemplate";
import Preloader from "../../common/Preloader";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


export const Messages: React.FC = React.memo(() => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)

    if(!messages.length) return <Preloader />

    return <div>
        {
            messages.map((item, index) => <MessageTemplate key={index} message={item} />)
        }
    </div>
})