import React, {useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
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
    UserAddOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import Topic from "./components/topic/topic";
import {Footer} from "antd/es/layout/layout";

const DialoguesContainer = React.lazy(() => import('./components/dialogues/dialoguesContainer'));
const UsersPage = React.lazy(() => import('./components/Users/userContainer'));

const {Header, Sider, Content} = Layout;


type Props = {}

const App: React.FC<Props> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const initialized = useSelector((state: AppStateType) => state.app.initialized)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'My Profile',
                            onClick: () =>{navigate('/profile')}
                        },
                        {
                            key: '2',
                            icon: <MessageOutlined />,
                            label: 'Dialogs',
                            onClick: () =>{navigate('/dialogues')}
                        },
                        {
                            key: '3',
                            icon: <FileOutlined />,
                            label: 'News',
                            onClick: () =>{navigate('/news')}
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined/>,
                            label: 'Music',
                            onClick: () =>{navigate('/music')}
                        },
                        {
                            key: '5',
                            icon: <UserAddOutlined />,
                            label: 'Users',
                            onClick: () =>{navigate('/users')}
                        },
                        {
                            key: '6',
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
                </Content>
                <Footer style={{textAlign: "center"}}>Developed by <a href={'https://github.com/VladVen'} target={'_blank'}>VladVen</a></Footer>
            </Layout>
        </Layout>


    )

}


export default App

