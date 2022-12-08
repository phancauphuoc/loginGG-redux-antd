import { Breadcrumb, Button, Image, Menu, Modal } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import React, { useEffect, useState } from 'react'
import { UserAddOutlined, SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import ContentComponent from './ContentComponent'
import { useDispatch, useSelector } from 'react-redux'
import GoogleLogin, { GoogleLogout, useGoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import { setLoginUser, setLogoutUser } from '../../redux/actions/LoginActions'
import LoginComponent from '../GoogleOauth/LoginComponent'
// import {Cookies} from 'react-cookie'

const LayoutComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const admin = useSelector(state => state.user);

    console.log("admin", admin)
    const navigate = useNavigate();
    const clientId = '300743791388-umhahq8clqrnnjfrpj4bp7q2hc2n9g5e.apps.googleusercontent.com';

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // const handleLogout = () => {
    //     Cookies.remove('user_id');
    //     navigate('/');
    // }
    const [profile, setProfile] = useState(false);
    const dispatch = useDispatch();
    const onSuccess = () => {
        setProfile(false)
        navigate('/home')
        setIsModalOpen(!isModalOpen);
        dispatch(setLogoutUser());
        alert("Logout success");
    }

    const onSuccess1 = (res) => {
        // console.log('[Login Success] currentUser:', res);
        setProfile(true);
        dispatch(setLoginUser(res.profileObj));
        navigate('/home');

    };

    const onFailure = (res) => {
        console.log('[Login failed] res', res)
    }

    const menuItems = [
        {
            key: 'center',
            icon: <UserAddOutlined />,
            label: 'lable1'
        },
        {
            key: 'setting',
            icon: <SettingOutlined />,
            label: 'lable2'
        },
        {
            key: 'home',
            icon: <LogoutOutlined />,
            label: 'lable3'
        },
        // {
        //     key: 'admin',
        //     icon: <UserOutlined />,
        //     label: 'Admin',
        //     className: 'log',
        //     onclick: { showModal }
        // },
    ];

    const menuItems1 = [
        {
            key: '1',
            icon: <UserAddOutlined />,
            label: 'lable1'
        },
        {
            key: '2',
            icon: <SettingOutlined />,
            label: 'lable2'
        },
        {
            key: '3',
            icon: <LogoutOutlined />,
            label: 'lable3'
        },
    ];

    return (
        <div>
            <Layout>
                <Header className='header'>
                    <div className='logo' />
                    <Menu theme='dark' mode='horizontal' items={menuItems} />
                    <Button type="primary" onClick={showModal} className="btnModal">
                        Admin
                    </Button>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ padding: '0 50px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Modal title="Infomation Admin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal'>
                        {
                            admin.user.length === 0 ?
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText='Login'
                                    onSuccess={onSuccess1}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    style={{ marginTop: '100px' }}
                                    isSignedIn={true}
                                /> :
                                <>
                                    <Image width={100} src={admin.user.imageUrl} referrerPolicy="no-referrer" />
                                    <h3>Name: {admin.user.name}</h3>
                                    <h3>Email: {admin.user.email}</h3>
                                    {/* <Button onClick={handleLogout}>Log Out</Button> */}
                                    <GoogleLogout
                                        clientId={clientId}
                                        buttonText='Log out'
                                        onLogoutSuccess={onSuccess}
                                    />

                                </>
                        }

                    </Modal>
                    <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
                        <Sider className='site-layout-background' width={200}>
                            <Menu
                                mode='inline'
                                items={menuItems1}
                                style={{ height: '100%' }}
                            />
                        </Sider>
                        <ContentComponent />
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design 2022 created by Phuoc</Footer>
            </Layout>
        </div>
    )
}

export default LayoutComponent