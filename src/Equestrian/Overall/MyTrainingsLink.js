import React from 'react'
import {Nav, Navbar, NavLink} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import horseImage from "../../images/horse.svg";
import styled from "styled-components"
import Login from "../Auth/LoginButton";
import Auth0ProviderWithHistory from "../Auth/Auth";
import LogoutButton from "../Auth/LogoutButton";
import AuthenticationButton from "../Auth/AuthenticationButton";
import UsernameText from "../Auth/UsernameText";
import {useAuth0} from "@auth0/auth0-react";

const TitleNavLink = styled(NavLink)`
  color: white;
  font-size: 15px;
  font-family: Roboto;
`;

const MyTrainingsLink = () => {
    const {isAuthenticated,isLoading} = useAuth0();

    if (!isAuthenticated || isLoading)
        return null;
    else
        return (
            <Nav.Item>
                <TitleNavLink href="/my-trainings">My trainings</TitleNavLink>
            </Nav.Item>
        )
};

export default MyTrainingsLink;
