import React from 'react';
import './App.css';
import Topic from './components/topic/topic';
import SideBar from './components/sideBar/sideBar';
import Inform from './components/inform/inform';
import Dialogues from "./components/dialogues/dialogues";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";


const App = (props) => {
    return(
        <div className='app-wrapper'>
            <Topic/>
            <SideBar/>
            <div>
                <Routes>
                <Route path='/inform' element={<Inform postData={props.postData}
                                                       addNewPost={props.addNewPost}
                                                       newPostText={props.newPostText}
                                                       updatePostArea={props.updatePostArea}/>} />
                <Route path='/dialogues/*' element={<Dialogues messagesData={props.messagesData}
                                                               dialoguesData={props.dialoguesData}
                                                               addNewMessage={props.addNewMessage}
                                                               newMessageText={props.newMessageText}
                                                               updateMessageArea={props.updateMessageArea} />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </div>
        </div>
)
}
export default App