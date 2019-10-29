import React from 'react';
import {observer} from "mobx-react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import './App.css';
import {CreateVehicle} from "./components/CreateVehicle";
import {CreateUser} from "./components/CreateUser";
import {CustomNavBar} from "./components/CustomNavBar";
import {LogIn} from "./components/Login";
import {SearchVehicleNew} from "./components/SearchVehicleNew";
import Container from "react-bootstrap/Container";
import {Profile} from "./components/Profile";

function App() {
    return (
        <Container>
            <CustomNavBar/>
                <Switch>
                    <Route exact path={"/login"} component={LogIn}/>
                    <Route exact path={"/search"} component={SearchVehicleNew}/>
                    <Route exact path={"/create/vehicle"} component={CreateVehicle}/>
                    <Route exact path={"/create/user"} component={CreateUser}/>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Route exact path={"/"} component={SearchVehicleNew}/>
                    <Route render={() => <h1>404</h1>}/>
                </Switch>
        </Container>
    );
}

export default observer(App);