import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {newUserStore} from "../stores/NewUserStore";
import {observer} from "mobx-react";
import Bcrypt from 'bcryptjs';

export const CreateUser = observer(()=> {
    function hashPassword(password) {
        const saltRounds = 10;
        Bcrypt.hash(password, saltRounds, function(err, hash) {
            console.log(hash);
            newUserStore.hashPass = hash;
        });
    }
    function createNewUser(password) {
        hashPassword(password);
        if(identcal()){
            newUserStore.newUser = {
                firm: newUserStore.newFirm,
                firstName: newUserStore.newFirstName,
                newLastName: newUserStore.newLastName,
                email: newUserStore.newEmail,
                password: newUserStore.newPasswordOne//newUserStore.hashPass
            };
            console.log(newUserStore.newUser)
        }else {
            alert("Password er ikke ens")
        }
    }

    function identcal() { return newUserStore.newpasswordtow === newUserStore.newPasswordOne ? true : false; }

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
                            <text>Firma</text>
                            <InputGroup id="test" className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newFirm}
                                    onChange={(e) => newUserStore.newFirm = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Fornavn</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newFirstName}
                                    onChange={(e)=> newUserStore.newFirstName = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Efternavn</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newLastName}
                                onChange={(e)=> newUserStore.newLastName = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Email</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newEmail}
                                    onChange={(e)=> newUserStore.newEmail = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="password"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newPasswordOne}
                                    onChange={(e)=> newUserStore.newPasswordOne = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password Confirm</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="password"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={newUserStore.newpasswordtow}
                                    onChange={(e)=> newUserStore.newpasswordtow = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <Button
                                onClick={()=>createNewUser(newUserStore.newPasswordOne)}
                                style={{
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
})