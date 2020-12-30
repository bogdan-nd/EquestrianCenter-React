import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Table} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import GetUserToken from "../Auth/GetUserToken";

const MyTable = styled(Table)`
  //margin-top: 70px;
  margin-top: 10px;
  background: #DCE5D7;
`;

const GetWorkouts = () => {
    const [trainings, setTrainings] = useState([]);
    const {isAuthenticated,user} = useAuth0();

    const apiUrl = "http://localhost:8080/trainings/";

    const fetchHorses = () => {
        if(isAuthenticated)
        axios.get(apiUrl+GetUserToken(user.sub)).then(response => {
            setTrainings(response.data)
        });
    };

    useEffect(() => {
        fetchHorses();
    }, []);

    return trainings.map((training, index) => {
        return (
            <tr>
                <th>{training.date}</th>
                <th>{training.horseName}</th>
                <th>{training.trainerName}</th>
            </tr>
        )
    });
}


export default function GetTrainingTable() {
    return (
        <div>
            <MyTable striped bordered hover>
                <tr>
                    <th>Date</th>
                    <th>Horse Name</th>
                    <th>Trainer Name</th>
                </tr>
                <tbody>
                <GetWorkouts/>
                </tbody>
            </MyTable>
        </div>
    )
}