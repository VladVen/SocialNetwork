import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>
    );



reportWebVitals();

