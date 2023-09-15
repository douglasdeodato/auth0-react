import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate(); // Use useNavigate para redirecionar após o login

    const handleLogin = () => {
        loginWithRedirect({
            // Redirecione para a URL desejada após o login bem-sucedido.
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
