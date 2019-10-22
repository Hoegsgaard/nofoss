import React from 'react';
import {observer} from "mobx-react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import './App.css';
import {CreateVehicle} from "./components/CreateVehicle";
import {CreateUser} from "./components/CreateUser";
import {Home} from "./components/Home";
import {CustomNavBar} from "./components/CustomNavBar";
import {LogIn} from "./components/Login";
import {SearchVehicle} from "./components/SearchVehicle";

function App() {
    return (
        <div>
            <container>
                <CustomNavBar/>
            </container>
            <container>
                <Switch>
                    <Route exact path={"/"} component={LogIn}/>
                    <Route exact path={"/home"} component={Home}/>
                    <Route exact path={"/search"} component={SearchVehicle}/>
                    <Route exact path={"/create/vehicle"} component={CreateVehicle}/>
                    <Route exact path={"/create/user"} component={CreateUser}/>
                    <Route render={() => <h1>404</h1>}/>
                </Switch>
            </container>
        </div>
    );
}

export default observer(App);