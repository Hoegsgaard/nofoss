import React from 'react';
import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {withRouter} from "react-router";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {vehicleStore} from "./stores/VehicleStore";
import './App.css';
import {Link} from "react-router-dom";
import {FormControl, InputGroup} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {CreateVehicle} from "./CreateVehicle";

function SearchVehicle() {
    const columns = [{
        dataField: 'brand',
        text: 'Vehicle Brand',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }, {
        dataField: 'name',
        text: 'Vehicle Name',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }, {
        dataField: 'price',
        text: 'Vehicle Price',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }];
    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    return (
        <BootstrapTable
            keyField="id"
            data={ vehicleStore.vehicles }
            columns={ columns }
            filter={ filterFactory() }
            defaultSorted={ defaultSorted }
        />
    );

}

function priceFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
        <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
        </div>
    );
}

function CreateUser() {
    return (
        <section>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br/>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </section>
    );
}

const LogIn = ()=> {
    return (
        <section>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br/>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button>I DO NOTHING :)</Button>
        </section>
    )};



const CustomNavBar = observer(()=> {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">NoFoss</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#search">Søg Køretøj</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#create/Vehicle">Nyt køretøj</Nav.Link>
                    <Nav.Link href="#create/User">Ny bruger</Nav.Link>
                </Nav>
                <Form inline>
                    <container>
                        <img src="https://i.imgur.com/bVMYcYR.png" className="Logo" alt="NoFoss Logo"/>
                    </container>
                </Form>
            </Navbar>
        </>
    );
});

function App() {
    return (
        <div>
            <container>
                <CustomNavBar/>
            </container>
            <container>
                <Switch>
                    <Route exact path={"/"} component={LogIn}/>
                    <Route exact path={"/home"} component={Temp}/>
                    <Route exact path={"/search"} component={SearchVehicle}/>
                    <Route exact path={"/create/vehicle"} component={CreateVehicle}/>
                    <Route exact path={"/create/user"} component={CreateUser}/>
                    <Route render={() => <h1>404</h1>}/>
                </Switch>
            </container>
        </div>
    );
}

const Temp = ()=> {
    return <div>
        <h1>TEMPTEMPTEMP</h1>
    </div>
};
export default observer(App);