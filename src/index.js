import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addNewPost} from "./state/state";
import state from "./state/state";

ReactDOM.render(
  <React.StrictMode>
    <App postData={state.profilePage.postData} messagesData={state.messagesPage.messagesData} dialoguesData={state.messagesPage.dialoguesData} addNewPost={addNewPost} />
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();

