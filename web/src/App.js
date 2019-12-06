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
    function setupApp() {
        if(userStore.state !== userStore.loginStates.LOGGED_IN){
            return (
                <Container>
                    <Switch>
                        <Route exact path={"/create/user"} component={CreateUser}/>
                        <Route render={() => <LogIn/>}/>
                    </Switch>
                </Container>
            )
        }else {
            return (
            <Container>
                <CustomNavBar/>
                <Switch>
                        <Route exact path={"/search"} component={SearchVehicleNew}/>
                        <Route exact path={"/create/vehicle"} component={CreateVehicle}/>
                        <Route exact path={"/profile"} component={Profile}/>
                        <Route exact path={"/"} component={SearchVehicleNew}/>
                        <Route render={() => <h1>404 - page not found</h1>}/>
                </Switch>
            </Container>
            )
        }
    }

    return (
       setupApp()
    );
}

export default observer(App);