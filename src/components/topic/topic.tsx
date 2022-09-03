import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../redux/selectors/authSelector";
import {logOutTC} from "../../redux/reducers/authReducer";
import {AnyAction} from "redux";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Avatar, Button} from "antd";
import {Header} from "antd/es/layout/layout";
import {AppStateType} from "../../redux/reduxStore";
import 'antd/dist/antd.css';


type Props = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

const Topic: React.FC<Props> = ({collapsed, setCollapsed}) => {
    const photo = useSelector((state: AppStateType) => state.profilePage.profileData?.photos.small)
    const isAuth = useSelector(getIsAuth)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOutTC() as unknown as AnyAction)
    }

    return (

        <Header className="site-layout-background" style={{paddingTop: 0, display: "flex", flex: 1, alignItems: "center"}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                style:{fontSize: '20px'},
                onClick: () => setCollapsed(!collapsed),
            })}
            {
                isAuth
                    ? <span style={{marginLeft: "auto", alignItems: "center"}}>
                        <Avatar src={photo} />
                    <Button onClick={logOut} style={{marginLeft: '20px'}}>Log Out</Button>
                    </span>
                    : <NavLink to={'/login'} style={{marginLeft: "auto", alignItems: "center"}}><Button>Login</Button></NavLink>
            }

        </Header>

    )
}
export default Topic