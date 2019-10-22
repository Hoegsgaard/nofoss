import {observer} from "mobx-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import React from "react";
import {userStore} from "../stores/UserStore";

export const CustomNavBar = observer(()=> {
    return (
        <>
            <Navbar bg="light" variant="light">

                <Navbar.Brand href="#home">NoFoss</Navbar.Brand>
                <Nav className="mr-auto">
                    {userStore.adminNavBar.map((element)=><Nav.Link href={element.href}>{element.name}</Nav.Link>)}
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