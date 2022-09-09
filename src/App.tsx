import React, {useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction} from "redux";
import 'antd/dist/antd.css';

import {AppStateType} from "./redux/reduxStore";

import {runInitialize} from "./redux/reducers/appReducer";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import LoginForm from "./components/Login/loginForm";
import Preloader from "./common/Preloader";
import ProfileContainer from "./components/profile/profileContainer";
import {
    FileOutlined,
    HomeOutlined,
    MessageOutlined,
    SettingOutlined,
    UploadOutlined,
    UserAddOutlined,
    WechatOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import Topic from "./components/topic/topic";
import {Footer} from "antd/es/layout/layout";

const DialoguesContainer = React.lazy(() => import('./components/dialogues/dialoguesContainer'));
const ChatPage = React.lazy(() => import('./components/Chat/ChatPage'));
const UsersPage = React.lazy(() => import('./components/Users/userContainer'));

const { Sider, Content} = Layout;



const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const initialized = useSelector((state: AppStateType) => state.app.initialized)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let location = useLocation()


    const catchAllUnhandledErrors = (promiseRejected: PromiseRejectionEvent) => {
        alert('Turn on vpn')
    }
    useEffect(() => {
        dispatch(runInitialize() as unknown as AnyAction)
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

        return window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    }, [])

    if (!initialized) {
        return <div className='preloader'><Preloader/></div>
    }
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img className="img" src='https://v.od.ua/uploads/92/logo.png'/>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[location.pathname === '/' ? '/profile' : location.pathname]}
                    items={[
                        {
                            key: '/profile',
                            icon: <HomeOutlined />,
                            label: 'My Profile',
                            onClick: () =>{navigate('/profile')}
                        },
                        {
                            key: '/dialogues',
                            icon: <MessageOutlined />,
                            label: 'Dialogs',
                            onClick: () =>{navigate('/dialogues')}
                        },
                        {
                            key: '/chat',
                            icon: <WechatOutlined />,
                            label: 'Chat',
                            onClick: () =>{navigate('/chat')}
                        },
                        {
                            key: '/news',
                            icon: <FileOutlined />,
                            label: 'News',
                            onClick: () =>{navigate('/news')}
                        },
                        {
                            key: '/music',
                            icon: <UploadOutlined/>,
                            label: 'Music',
                            onClick: () =>{navigate('/music')}
                        },
                        {
                            key: '/users',
                            icon: <UserAddOutlined />,
                            label: 'Users',
                            onClick: () =>{navigate('/users')}
                        },
                        {
                            key: '/settings',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                            onClick: () =>{navigate('/settings')}
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
              <Topic collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>

                                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                <Route path='/profile/' element={<ProfileContainer/>}/>
                                <Route path='/dialogues/*' element={<DialoguesContainer />}/>
                                <Route path='/chat' element={<ChatPage />}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                                <Route path='/users/*' element={<UsersPage/>}/>
                                <Route path='/login' element={<LoginForm/>}/>
                                <Route path='*' element={<div><b>404 not Found</b></div>}/>
                                <Route path='/' element={<Navigate to="/profile" />}/>
                            </Routes>
                        </React.Suspense>
                </Content>
                <Footer style={{textAlign: "center"}}>Developed by <a href={'https://github.com/VladVen'} target={'_blank'}>VladVen</a></Footer>
            </Layout>
        </Layout>


    )

}


export default App

