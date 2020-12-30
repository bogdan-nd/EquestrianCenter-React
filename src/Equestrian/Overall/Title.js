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
import MyTrainingsLink from "./MyTrainingsLink";

const GreenNavbar = styled(Navbar)`
  background: #334617;
`;

const TitleNavLink = styled(NavLink)`
  color: white;
  font-size: 15px;
  font-family: Roboto;
`;

export default function Title (){
    return (
            <GreenNavbar>
                <Navbar.Brand>
                    <img
                        src={horseImage}
                        width={30}
                        height={30}
                        alt={"Logo of equestrian center"}
                    />
                </Navbar.Brand>
                <Nav navbar={false}>
                    <Nav.Item>
                        <TitleNavLink href="/">Horses</TitleNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <TitleNavLink href="/trainers">Trainers</TitleNavLink>
                    </Nav.Item>
                    <MyTrainingsLink/>
                    <Nav.Item>
                        <UsernameText/>
                    </Nav.Item>

                </Nav>
                <AuthenticationButton/>
            </GreenNavbar>)
};