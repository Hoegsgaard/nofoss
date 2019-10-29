import {observer} from "mobx-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import React from "react";
import {userStore} from "../stores/UserStore";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const CustomNavBar = observer(() => {
    return (
        <Container >
            <Row>
                <Col md={{span: 8, offset: 0}}>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Navbar.Brand href={'#/search'}>Nofoss</Navbar.Brand>
                                {userStore.adminNavBar.map((element) => <Nav.Link href={element.href}>{element.name}</Nav.Link>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col md={{span: 4, offset:0}} className="d-none d-lg-block">
                    <img src="https://i.imgur.com/bVMYcYR.png" className="Logo" alt="NoFoss Logo"/>
                </Col>
            </Row>
        </Container>

    );
});