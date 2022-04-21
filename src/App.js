import React from 'react';
import './App.css';
import Topic from './components/topic/topic';
import SideBar from './components/sideBar/sideBar';
import Inform from './components/inform/inform';
import Dialogues from "./components/dialogues/dialogues";


const App = () => {
  return (
    <div className='app-wrapper'>
     <Topic />
     <SideBar />
     <Inform />
     <Dialogues />
    </div>
  );
}
export default App