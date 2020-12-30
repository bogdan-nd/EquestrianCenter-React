import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "../Overall/Title";
import axios from "axios";
import {Card, CardImg} from "react-bootstrap";
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";
import PostUser from "../Auth/PostUser";

const HorseCardStyle = styled.div`
  margin-left: 80px;
`;

const HorseCardTitle = styled(Card.Title)`
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
`;

const HorseCard = styled(Card)`
  float: left;
  margin-left: 70px;
  margin-top: 40px;
`;

const HorseCardTStyle = styled(Card.Text)`
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
`;

const GetHorses = () => {
    const [horses, setHorses] = useState([]);

    const {user, isAuthenticated} = useAuth0();

    const apiUrl = "http://localhost:8080/horses";

    const fetchHorses = () => {
        axios.get(apiUrl).then(response => {
            setHorses(response.data)
        });
    };


    useEffect(() => {
        fetchHorses();
    }, []);

    return horses.map((horse, index) => {

        return (
            <HorseCard style={{width: '25rem'}}>
                <CardImg variant={"top"} src={"https://media.gq.com/photos/56e71c0b14cbe0637b261d7f/4:3/w_2260,h_1695,c_limit/horseinsuit2.jpg"}/>
                <HorseCardTitle>
                    {horse.name}
                </HorseCardTitle>
                <HorseCardTStyle>
                    Sports Category: {horse.horsemanStatus}
                </HorseCardTStyle>
                <HorseCardTStyle>
                    Gender: {horse.gender}
                </HorseCardTStyle>
                <HorseCardTStyle>
                    Price: {horse.price}
                </HorseCardTStyle>
            </HorseCard>
        )
    });
}

export default function OurHorses() {
    return (
        <div>
            <Title/>
            <PostUser/>
            <HorseCardStyle>
                <GetHorses/>
            </HorseCardStyle>
        </div>
    );

}
