import React from 'react';
import {observer} from "mobx-react";
import {Switch} from "react-router";
import {Route} from "react-router-dom"
import './App.css';
import {CreateVehicle} from "./components/CreateVehicle";
import {CreateUser} from "./components/CreateUser";
import {CustomNavBar} from "./components/CustomNavBar";
import {LogIn} from "./components/Login";
import {SearchVehicleNew} from "./components/SearchVehicleNew";
import Container from "react-bootstrap/Container";
import {Profile} from "./components/Profile";
import {userStore} from "./stores/UserStore";

function App() {
    return (
        <Container>
            <CustomNavBar/>
                <Switch>
                    {userStore.state !== userStore.loginStates.LOGGED_IN && <LogIn/>}
                    {userStore.state === userStore.loginStates.LOGGED_IN &&
                        <>
                    <Route exact path={"/login"} component={LogIn}/>
                    <Route exact path={"/search"} component={SearchVehicleNew}/>
                    <Route exact path={"/create/vehicle"} component={CreateVehicle}/>
                    <Route exact path={"/create/user"} component={CreateUser}/>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Route exact path={"/"} component={SearchVehicleNew}/>
                    <Route render={() => <h1>404</h1>}/>
                    </>
                        }
                </Switch>
        </Container>
    );
}

export default observer(App);