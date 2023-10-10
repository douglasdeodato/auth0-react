import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogout = () => {
        console.log("Logging out...");
        logout();
    };

    return (
        isAuthenticated && (
            <button onClick={handleLogout}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton;