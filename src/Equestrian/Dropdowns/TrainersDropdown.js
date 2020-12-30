import React, {useEffect, useReducer, useState} from "react";
import axios from "axios";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import {useAuth0} from "@auth0/auth0-react";
import GetUserToken from "../Auth/GetUserToken";

const ChooseDropdownItem = styled(DropdownItem)`
  width: 690px;
  background: #A9C698;
  color: white;
  text-align: center;

  :hover {
    background: #809473;
  }
`;

const ChooseDropdownToggle = styled(DropdownToggle)`
  width: 100%;
  text-align: center;
  border-width: 2px;
  border-color: #5B724C;
  background: #809473;

  :hover {
    background: #5B724C;
  }
`;


const TrainersDropdown = ({currentTrainer, updateCurrentTrainer}) => {
    const [trainers, setTrainers] = useState([]);
    const {user, isAuthenticated} = useAuth0();

    const fetchTrainers = () => {
        if(isAuthenticated)
            axios.get("http://localhost:8080/clients/"+GetUserToken(user.sub)+"/suitable-trainers").then(response => {
                setTrainers(response.data)
            });
    };

    useEffect(() => {
        fetchTrainers();
    }, []);

    function changeToggleTitle(trainer) {
        updateCurrentTrainer(trainer);
    }

    return (
        <Dropdown>
            <ChooseDropdownToggle>{currentTrainer.name}</ChooseDropdownToggle>
            <Dropdown.Menu>
                {
                    trainers.map((trainer, index) => {
                        return (<ChooseDropdownItem
                                onClick={() => changeToggleTitle(trainer)}>{trainer.name}</ChooseDropdownItem>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TrainersDropdown;