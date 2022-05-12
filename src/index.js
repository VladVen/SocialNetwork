import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                postData={store.getState.profilePage.postData}
                messagesData={store.getState.messagesPage.messagesData}
                dialoguesData={store.getState.messagesPage.dialoguesData}
                newPostText={store.getState.profilePage.newPostText}
                newMessageText={store.getState.messagesPage.newMessageText}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState)

store.subscribe(rerenderEntireTree)

reportWebVitals();

