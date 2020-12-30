import './App.css';
import {Image} from "react-bootstrap";
import styled from "styled-components";
import React from "react";
import MyTrainings from "./Equestrian/MyTrainings/MyTraining";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import OurHorses from "./Equestrian/OurHorses/OurHorses";
import Trainers from "./Equestrian/Trainers/Trainers";

const GirlImage = styled(Image)`
  width: 450px;
  float: right;
  margin-right: 90px;
  margin-top: 30px;
`;


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/my-trainings"} component={MyTrainings}/>
                <Route exact path={"/trainers"} component={Trainers}/>
                <Route exact path={"/"} component={OurHorses}/>
            </Switch>
        </Router>
    );
}

export default App;
