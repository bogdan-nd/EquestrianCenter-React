import React, {useEffect, useState} from "react";
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


const HorsesDropdownList = ({currentHorse, updateCurrentHorse}) => {
    const [horses, setHorses] = useState([]);
    const {user, isAuthenticated} = useAuth0();


    const fetchHorses = () => {
        if (isAuthenticated) {
            axios.get("http://localhost:8080/clients/" + GetUserToken(user.sub) + "/suitable-horses").then(response => {
                setHorses(response.data)
            })
        } else
            setHorses([])
    }

    useEffect(() => {
        fetchHorses()
    }, []);



    function changeToggleTitle(horse) {
        updateCurrentHorse(horse);
    }

    return (
        <Dropdown>
            <ChooseDropdownToggle>{currentHorse.name}</ChooseDropdownToggle>
            <Dropdown.Menu>
                {
                    horses.map((horse, index) => {
                        return (<ChooseDropdownItem
                                onClick={() => changeToggleTitle(horse)}>{horse.name}</ChooseDropdownItem>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default HorsesDropdownList;