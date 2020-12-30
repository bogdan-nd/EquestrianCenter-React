import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Alert} from "react-bootstrap";
import AddTraining from "./AddTraining";
import styled from "styled-components";

const LoadingAlert = styled(Alert)`
  margin-left: 100px;
  margin-top: 100px;
  width: 600px;
  text-align: center;
`;

const AddTrainingBox = () => {
    const {isLoading} = useAuth0();

    return isLoading? <LoadingAlert variant={'warning'}>Loading...</LoadingAlert> : <AddTraining/>
}

export default AddTrainingBox;