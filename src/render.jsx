import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addNewMessage, addNewPost} from "./state/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                postData={state.profilePage.postData}
                messagesData={state.messagesPage.messagesData}
                dialoguesData={state.messagesPage.dialoguesData}
                addNewPost={addNewPost}
                addNewMessage={addNewMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree