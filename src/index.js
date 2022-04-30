import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialoguesData = [
    {id: 1, name: 'Jenya'},
    {id: 2, name: 'Juliya'},
    {id: 3, name: 'Vitalik'},
    {id: 4, name: 'Egor'}
]

let postData = [
    {id:1, message: 'Hello world!!!',likes:85,dislikes:1 },
    {id:2, message: 'Slava Ukraine',likes:105,dislikes:15 },
    {id:3, message: 'Crimea is ours',likes:100,dislikes:5 },
    {id:4, message: 'Русские пидоры',likes:456,dislikes:165 },
    {id:5, message: 'Русские пидоры',likes:456,dislikes:165 }
]

let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'How are you ?'},
    {id: 3, message: 'Slava Ukraine!!!'},
    {id: 4, message: 'Fuck off'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialoguesData={dialoguesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();

