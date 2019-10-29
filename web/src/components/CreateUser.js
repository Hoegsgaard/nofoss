import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export function CreateUser() {
    return (
        <div >
            <Container>
                <Row><Col md={{span: 6, offset: 3}} style={{
                    background: '#fff',
                    padding: '20pt',
                    border: '1px solid',
                    borderColor: '#d8dee2',
                    borderRadius: "5pt"
                }}>


                    <Container>
                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Firm</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>First Name</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Last Name</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Email</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password Confirm</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <Button style={{
                                width: '100%',
                                background:'#637724',
                                borderColor:'#637724'
                            }}>Opret bruger</Button>
                        </Col></Row>
                    </Container>

                </Col></Row>
            </Container>
        </div>
    );
}