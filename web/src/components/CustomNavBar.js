import {observer} from "mobx-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import React from "react";
import {userStore} from "../stores/UserStore";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const CustomNavBar = observer(() => {
    return (
       /* <Navbar expand="lg" style={{background: "#f0f0f0"}}>
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand>NoFoss</Navbar.Brand>
                <Nav className="mr-auto">
                    {userStore.adminNavBar.map((element) => <Nav.Link href={element.href}>{element.name}</Nav.Link>)}
                </Nav>
                <Form inline>
                    <container>
                        <img src="https://i.imgur.com/bVMYcYR.png" className="Logo" alt="NoFoss Logo"/>
                    </container>
                </Form>
            </Navbar.Collapse>
        </Navbar>*/

        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {userStore.adminNavBar.map((element) => <Nav.Link href={element.href}>{element.name}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
            <container>
                <img src="https://i.imgur.com/bVMYcYR.png" className="Logo" alt="NoFoss Logo"/>
            </container>
        </Navbar>
    );
});