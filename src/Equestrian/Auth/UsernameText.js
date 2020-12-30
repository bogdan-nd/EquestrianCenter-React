import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import styled from "styled-components"

const UserNameTextStyle = styled.label`
  //background: #9EB591;
  height: 30px;
  margin-top: 9px;
  border-color: #6D855F;
  margin-left: 860px;
  width: 220px;
  text-align: center;
  float: bottom;
  color: white;
  vertical-align: center;
`;

const UsernameText = () => {
    const {user, isAuthenticated} = useAuth0();

    return isAuthenticated ? <UserNameTextStyle>{user.name}</UserNameTextStyle> : <div></div>

};

export default UsernameText;