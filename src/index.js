import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dataBase from "./dataBase/dataBase";

ReactDOM.render(
  <React.StrictMode>
    <App postData={dataBase.profilePage.postData} messagesData={dataBase.messagesPage.messagesData} dialoguesData={dataBase.messagesPage.dialoguesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();

