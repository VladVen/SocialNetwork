import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./state/state";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addNewMessage, addNewPost, updateMessageArea, updatePostArea} from "./state/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                postData={state.profilePage.postData}
                messagesData={state.messagesPage.messagesData}
                dialoguesData={state.messagesPage.dialoguesData}
                newPostText={state.profilePage.newPostText}
                newMessageText={state.messagesPage.newMessageText}
                addNewPost={addNewPost}
                addNewMessage={addNewMessage}
                updatePostArea={updatePostArea}
                updateMessageArea={updateMessageArea}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();

