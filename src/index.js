import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                postData={state.profilePage.postData}
                messagesData={state.messagesPage.messagesData}
                dialoguesData={state.messagesPage.dialoguesData}
                newPostText={state.profilePage.newPostText}
                newMessageText={state.messagesPage.newMessageText}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();

