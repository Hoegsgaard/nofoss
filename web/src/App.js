import React from 'react';
import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {withRouter} from "react-router";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import VehicleStore from "./stores/VehicleStore";
import './App.css';
import {Link} from "react-router-dom";
import {FormControl, InputGroup} from "react-bootstrap";
import {BootstrapTable} from "react-bootstrap-table-2";

const vehicleStore = new VehicleStore();

function SearchVehicle() {

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];
    return (
            <BootstrapTable keyField='id' data={ vehicleStore } columns={ columns } />
    );

}

function NewVehicle(){
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3"/>
            </Form.Group>
        </Form>
    );
}

function UserInfo() {
    return (
        <section>


        </section>
    );
}

function LogIn() {
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
        </section>
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

function NavTabs() {
    return (
        <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
            <Tab eventKey="search" title="Søg køretøj">
                <h1>Søg efter dit ønskede køretøj.</h1>
                <SearchVehicle/>
            </Tab>
            <Tab eventKey="profile" title="Profil">
                <h1>Dette er din profil.</h1>
                <UserInfo/>
            </Tab>
            <Tab eventKey="contact" title="skjult* Admin" /*disabled*/>
                <Link to="/admin">Admin Side</Link>
                <NewVehicle/>
                <CreateUser/>
            </Tab>
        </Tabs>
    );
}

function AdminNavTabs() {
    return (
        <section>
            <h1>ADMINISTRATOR PAGE</h1>
            <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
                <Tab eventKey="search" title="Søg køretøj">
                    <h1>Søg efter dit ønskede køretøj.</h1>
                    <SearchVehicle/>
                </Tab>
                <Tab eventKey="profile" title="Ny Bruger">
                    <h1>Lav en ny bruger.</h1>
                    <CreateUser/>
                </Tab>
                <Tab eventKey="contact" title="skjult* Admin" /*disabled*/>
                    <Link to="/admin">Admin Side</Link>
                    <NewVehicle/>
                    <CreateUser/>
                </Tab>
            </Tabs>
        </section>
    );
}

function App() {
    return (
        <div>
            <container>
                <img src="https://i.imgur.com/bVMYcYR.png" className="Logo" alt="NoFoss Logo"/>
            </container>
            <container>
                <Switch>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/"} render={() => <NavTabs/>}/>
                    <Route render={() => <h1>404</h1>}/>
                </Switch>
            </container>
        </div>
    );
}

/* add to history TODO: fix - Ask Christian*/
const handleSelect = withRouter(({history, match}) => {
    console.log(history);
    console.log(match);
    history.push('/' + match.params.text)
});

const Admin = withRouter(({history, match}) => {
    console.log(history);
    console.log(match);
    return <div>
        <h1>Admin Log in</h1>
        <Button onClick={() => history.push("/")}>Til forside</Button>
    </div>
});

export default observer(App);