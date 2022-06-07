import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>
    );



reportWebVitals();

