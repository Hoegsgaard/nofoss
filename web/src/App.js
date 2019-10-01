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
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const vehicleStore = new VehicleStore();

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

function NewVehicle() {
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

function CreateVehicle() {
    return (
        <section>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehicleBrand" value = {vehicleStore.newBrand} onChange={(e)=>vehicleStore.newBrand=e.target.value}>Brand</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Brand"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehicleName" value = {vehicleStore.newName}  onChange={(e)=>vehicleStore.newName=e.target.value}>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Name"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehiclePrice" value = {vehicleStore.newPrice} onChange={(e)=>vehicleStore.newPrice=e.target.value}>Price</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Price"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button onClick={() => vehicleStore.vehicles.push({brand:vehicleStore.newBrand,name:vehicleStore.newName,price:vehicleStore.newPrice})}>Opret Køretøj</Button>
        </section>
    );
}

function NavTabs() {
    return (
        <Tabs defaultActiveKey="search" id="uncontrolled-tab-example">
            <Tab eventKey="search" title="Søg køretøj">

                <SearchVehicle/>
            </Tab>
            <Tab eventKey="profile" title="Profil">
                <UserInfo/>
            </Tab>
        </Tabs>
    );
}

function AdminNavTabs() {
    return (
        <section>
            <Tabs defaultActiveKey="create" id="uncontrolled-tab-example">
                <Tab eventKey="create" title="Opret nyt køretøj">
                    <CreateVehicle/>
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
    history.push('/' + match.text)
});

const Admin = withRouter(({history, match}) => {
    console.log(history);
    console.log(match);
    return <div>
        <AdminNavTabs/>
        <Button onClick={() => history.push("/")}>Ud af Admin</Button>
    </div>
});

export default observer(App);