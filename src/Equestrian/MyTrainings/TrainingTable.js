import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Alert} from "react-bootstrap";
import styled from "styled-components";
import GetTrainingTable from "./GetTrainingTable";

const LoadingAlert = styled(Alert)`
  margin-left: 100px;
  margin-top: 100px;
  width: 600px;
  text-align: center;
`;

const AddTrainingBox = () => {
    const {isLoading} = useAuth0();

    return isLoading? <LoadingAlert variant={'warning'}>Loading...</LoadingAlert> : <GetTrainingTable/>
}

export default AddTrainingBox;