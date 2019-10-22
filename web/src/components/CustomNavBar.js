import {observer} from "mobx-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import React from "react";

 export const CustomNavBar = observer(()=> {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">NoFoss</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Login</Nav.Link>
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