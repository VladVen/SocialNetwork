import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import withRouter from "./common/HOC/withRouter";
import {AppStateType} from "./redux/reduxStore";

import {runInitialize} from "./redux/reducers/appReducer";
import SideBar from './components/sideBar/sideBar';
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import LoginForm from "./components/Login/loginForm";
import Preloader from "./common/Preloader";
import ProfileContainer from "./components/profile/profileContainer";
import Topic from "./components/topic/topic";


const DialoguesContainer = React.lazy(() => import('./components/dialogues/dialoguesContainer'));
const UsersPage = React.lazy(() => import('./components/Users/userContainer'));


type mapState = {initialized: boolean}
type mapDispatch = {runInitialize: () => void}

type Props = mapDispatch & mapState

class App extends React.Component<Props> {
    catchAllUnhandledErrors = (promiseRejected: PromiseRejectionEvent) => {
        alert('Turn on vpn')
    }
    componentDidMount() {
        this.props.runInitialize()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <div className='preloader'><Preloader/></div>
        }
        return (
            <div className='app-wrapper'>
                <Topic/>
                <SideBar/>
                <div>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>

                            <Route path='/profile/:userId' element={<ProfileContainer/>}
                            />
                            <Route path='/profile/' element={<ProfileContainer/>}
                            />
                            <Route path='/dialogues/*' element={<DialoguesContainer/>}
                            />
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users/*' element={<UsersPage/>}/>
                            <Route path='/login' element={<LoginForm/>}/>
                            <Route path='*' element={<div><b>404 not Found</b></div>}/>
                            <Route path='/' element={<Navigate to="/profile" />}
                            />
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = {
    runInitialize,
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(App)