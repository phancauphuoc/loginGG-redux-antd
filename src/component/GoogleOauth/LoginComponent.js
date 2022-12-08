import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import GoogleLogout from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginUser } from '../../redux/actions/LoginActions'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const LoginComponent = () => {
    const [profile, setProfile] = useState([]);
    const dispatch = useDispatch();
    const clientId = '300743791388-umhahq8clqrnnjfrpj4bp7q2hc2n9g5e.apps.googleusercontent.com';
    const navigate = useNavigate();

    const onSuccess = (res) => {
        // console.log('[Login Success] currentUser:', res);
        setProfile(res.profileObj);
        dispatch(setLoginUser(res.profileObj));
        navigate('/home');
    };

    const onFailure = (res) => {
        console.log('[Login failed] res', res)
    }

    const onSuccess1 = () => {
        alert('Logout success!!!');
        setProfile('');
    }

    const userLogin = useSelector(state => state.user);
    console.log("userLogin >>>", userLogin);

    return (
        <div className='mainLogin'>
            <div className='btnLoginGG'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                />
                {/* <div className='div-profile'>
                <p>Your profile</p>
                <img src={profile.imageUrl} alt="user image" />
                <h3>Name: {profile.name}</h3>
                <p>Email Address: {profile.email}</p>

            </div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onSuccess={onSuccess1}
            /> */}
            </div>
        </div>
    )
}

export default LoginComponent