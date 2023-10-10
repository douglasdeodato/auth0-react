import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Logging in...");
        loginWithRedirect({
            returnTo: '',
        });
    };

    return (
        !isAuthenticated && (
            <button onClick={handleLogin}>
                Sign In
            </button>
        )
    )
}

export default LoginButton;