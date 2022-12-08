import React from 'react'
import { GoogleLogout } from 'react-google-login'

const LogoutComponent = () => {
    const clientId = '300743791388-umhahq8clqrnnjfrpj4bp7q2hc2n9g5e.apps.googleusercontent.com';

    const onSuccess = () => {
        alert('Logout successfully');
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutComponent