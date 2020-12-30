import Title from "../Overall/Title";
import Quote from "./Quote";
import {Alert, Image} from "react-bootstrap";
import styled from "styled-components";
import girlOnHorseImage from "../../images/coop2.jpg"
import React from "react";
import GetTrainingTable from "./GetTrainingTable";
import AddTrainingBox from "./AddTrainingBox";
import TrainingTable from "./TrainingTable";

const GirlImage = styled(Image)`
  width: 450px;
  float: right;
  margin-right: 90px;
  margin-top: 30px;
`;


const MyTrainingsAlert = styled(Alert)`
  width: 120px;
  font-size: 16px;
  margin-top: 50px;
  font-family: Roboto;
  margin-left: 30px;
`;

export default function MyTrainings() {
    return (
        <div>
            <Title/>
            <Quote/>
            <GirlImage src={girlOnHorseImage}/>
            <AddTrainingBox/>
            <p/>
            <MyTrainingsAlert/>
            <TrainingTable/>
        </div>
    );
}