import { useAuth0 } from "@auth0/auth0-react";

const logoutButton = ()  => {
    const {logout, isAuthenticated } = useAuth0();
return (

    !isAuthenticated && (
        <button onClick={() => logout()}>
            Sign in
        </button>
    )
   
)


}

export default logoutButton