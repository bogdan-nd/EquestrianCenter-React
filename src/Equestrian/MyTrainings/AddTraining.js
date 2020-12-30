import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import {Alert, Button} from "react-bootstrap";
import TrainersDropdown from "../Dropdowns/TrainersDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import HorsesDropdownList from "../Dropdowns/HorsesDropdownList";
import {useAuth0} from "@auth0/auth0-react";
import GetUserToken from "../Auth/GetUserToken";
import axios from "axios";

const AddTrainingStyle = styled.div`
  width: 45%;
  margin-top: 20px;
  margin-left: 100px;
`;

const ChooseAlert = styled(Alert)`
  font-size: 16px;
`;


const AddTrainingButton = styled(Button)`
  width: 200px;
  background: #829279;
  border-color: #5B724C;
  margin-top: 30px;
  margin-left: 70%;
  border-radius: 10px;
`;

export default function AddTraining() {
    const {user, isAuthenticated} = useAuth0();
    const [trainingTime, updateTrainingTime] = useState("Choose...");
    const [currentHorse, updateCurrentHorse] = useState({name: "Choose..."});
    const [currentTrainer, updateCurrentTrainer] = useState({name: "Choose..."});

    function changeCalendarTitle(date) {
        updateTrainingTime(moment(date).format('DD.MM.YYYY H:mm'));
    }

    const PostTraining = () => {
        if (isAuthenticated && currentTrainer.name !== "Choose..." && currentHorse.name !== "Choose..." && trainingTime !== "Choose...") {
            const trainingData = {
                trainerId: currentTrainer.id,
                horseId: currentHorse.id,
                clientToken: GetUserToken(user.sub),
                startTime: trainingTime
            };
            const postUrl = "http://localhost:8080/trainings"
            alert("Training was added.")
            axios.post(postUrl, trainingData);
        } else
            alert("You need to select all parameters for creating training.")

        return null
    }

    return (
        <AddTrainingStyle>
            <ChooseAlert>
                Choose a horse
            </ChooseAlert>
            <HorsesDropdownList currentHorse={currentHorse} updateCurrentHorse={updateCurrentHorse}/>
            <p></p>
            <ChooseAlert>
                Choose a coach
            </ChooseAlert>
            <TrainersDropdown currentTrainer={currentTrainer} updateCurrentTrainer={updateCurrentTrainer}/>
            <p></p>
            <p></p>
            <ChooseAlert>
                Choose your training date and time
            </ChooseAlert>
            <DatePicker
                format="dd-MM-yyyy HH:mm"
                onChange={date => changeCalendarTitle(date)}
                showTimeSelect
                todayHighlight={true}
                autoclose={true}
                placeholderText={trainingTime}/>
            <AddTrainingButton onClick={PostTraining}>Add Training</AddTrainingButton>

        </AddTrainingStyle>
    )
}