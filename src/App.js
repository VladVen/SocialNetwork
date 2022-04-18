import React from 'react';
import './App.css';
import Topic from './components/topic';
import SideBar from './components/sideBar';
import Inform from './components/inform';


const App = () => {
  return (
    <div className='app-wrapper'>
     <Topic />
     <SideBar />
     <Inform />
     
    </div>
  );
}
export default App