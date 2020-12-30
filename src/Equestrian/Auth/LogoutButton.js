import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";
import styled from "styled-components"

const LogButtonStyle = styled(Button)`
  background: #9EB591;
  //margin-left: 890px;
  margin-left: 20px;
  border-color: #6D855F;
`;

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <LogButtonStyle onClick={() => logout({returnTo: window.location.origin})}>Log out</LogButtonStyle>
    )
};

export default LogoutButton;