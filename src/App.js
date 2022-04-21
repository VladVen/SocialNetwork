import React from 'react';
import './App.css';
import Topic from './components/topic/topic';
import SideBar from './components/sideBar/sideBar';
import Inform from './components/inform/inform';
import Dialogues from "./components/dialogues/dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return(
    <BrowserRouter>
        <div className='app-wrapper'>
            <Topic/>
            <SideBar/>
            <div>
                <Routes>
                <Route path='/inform' element={<Inform />}/>
                <Route path='/dialogues' element={<Dialogues />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
)
}
export default App