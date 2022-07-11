import React from 'react';
import './App.css';
import SideBar from './components/sideBar/sideBar';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import DialoguesContainer from "./components/dialogues/dialoguesContainer";
import UsersContainer from "./components/Users/userContainer";
import ProfileContainer from "./components/inform/profileContainer";
import TopicContainer from "./components/topic/topicContainer";
import LoginForm from "./components/Login/loginForm";


const App = (props) => {
    return(
        <div className='app-wrapper'>
            <TopicContainer />
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
                    <Route path='/login' element={<LoginForm />}/>
                </Routes>
            </div>
        </div>
)
}
export default App