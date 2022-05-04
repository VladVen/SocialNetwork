import React from 'react';
import './App.css';
import Topic from './components/topic/topic';
import SideBar from './components/sideBar/sideBar';
import Inform from './components/inform/inform';
import Dialogues from "./components/dialogues/dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import {addNewMessage} from "./state/state";


const App = (props) => {
    return(
    <BrowserRouter>
        <div className='app-wrapper'>
            <Topic/>
            <SideBar/>
            <div>
                <Routes>
                <Route path='/inform' element={<Inform postData={props.postData} addNewPost={props.addNewPost}/>} />
                <Route path='/dialogues/*' element={<Dialogues messagesData={props.messagesData} dialoguesData={props.dialoguesData} addNewMessage={addNewMessage} />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
)
}
export default App