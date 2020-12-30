import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "../Overall/Title";
import {Alert, Table} from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const MyTable = styled(Table)`
  //margin-top: 70px;
  margin-top: 10px;
  background: #DCE5D7;
`;


const GetTrainers = () => {
    const [trainers, setTrainers] = useState([]);

    const apiUrl = "http://localhost:8080/trainers";

    const fetchHorses = () => {
        axios.get(apiUrl).then(response => {
            setTrainers(response.data)
        });
    };

    useEffect(() => {
        fetchHorses();
    }, []);

    return trainers.map((trainer, index) => {
        return (
            <tr>
                <th>{trainer.name}</th>
                <th>{trainer.sportCategory}</th>
                <th>{trainer.trainingPrice}</th>
            </tr>
        )
    });
}


export default function Trainers() {
    return (
        <div>
            <Title/>
            <MyTable striped bordered hover>
                <tr>
                    <th>Name</th>
                    <th>Sport Category</th>
                    <th>Training Price</th>
                </tr>
                <tbody>
                <GetTrainers/>
                </tbody>
            </MyTable>
        </div>
    )
}
