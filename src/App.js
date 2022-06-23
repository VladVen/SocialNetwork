import React from 'react';
import './App.css';
import Topic from './components/topic/topic';
import SideBar from './components/sideBar/sideBar';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialoguesContainer from "./components/dialogues/dialoguesContainer";
import UsersContainer from "./components/Users/userContainer";
import ProfileContainer from "./components/inform/profileContainer";


const App = (props) => {
    return(
        <div className='app-wrapper'>
            <Topic/>
            <SideBar/>
            <div>
                <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer />}
                />
                    <Route path='/profile/' element={<ProfileContainer />}
                />
                <Route path='/dialogues/*' element={<DialoguesContainer />}
                />
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                    <Route path='/users/*' element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
)
}
export default App