import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from "@auth0/auth0-react";
import UsernameText from "./UsernameText";
// import UsernameText from "./UsernameText";

const AuthenticationButton = () => {
    const{isAuthenticated} = useAuth0();

    return isAuthenticated? <LogoutButton/> : <LoginButton/>
};

export default AuthenticationButton;