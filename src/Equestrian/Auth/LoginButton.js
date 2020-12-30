import React from "react";
import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";
import styled from "styled-components";

const LogButtonStyle = styled(Button)`
  background: #9EB591;
  margin-left: 1220px;
  border-color: #6D855F;
`;

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <LogButtonStyle onClick={() => loginWithRedirect({redirect_uri:"http://localhost:3000/my-trainings"})}>Log In</LogButtonStyle>;
}

export default LoginButton;