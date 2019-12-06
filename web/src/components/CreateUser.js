import {Col, FormControl, InputGroup, Row, Toast} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {userStore} from "../stores/UserStore";
import {observer} from "mobx-react";
import {agent} from "../stores/Agent";
import Recaptcha from 'react-recaptcha';
import {vehicleStore} from "../stores/VehicleStore";
import {Route, withRouter} from "react-router";
import {LogIn} from "./Login";

//const passwordHash = require('password-hash');
let isVertified = false;
export const CreateUser = withRouter( observer((history)=> {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function verifyCallback(response) {
        if(response){
            isVertified = true;
        }
    }

    function callback () {
        console.log('Done');
    }

    function clean() {
        userStore.newFirm = "";
        userStore.newFirstName = "";
        userStore.newLastName = "";
        userStore.newEmail = "";
        userStore.newPasswordOne = "";
        userStore.newpasswordtow ="";
    }

    function createNewUser() {
        if(userStore.newFirm !== ""
        && userStore.newFirstName !== ""
        && userStore.newLastName !==""
        && userStore.newEmail !== ""
        && userStore.newPasswordOne !== ""
        && userStore.newpasswordtow !== ""
        && isVertified) {

            //const hashPass = passwordHash.generate(password);
            if (identcal()) {
                //userStore.newHashPass = hashPass;
                agent.createUser();
                clean();
                window.location.replace("/")
            } else {
                setShow1(true)
            }
        }else{
            setShow2(true)
        }
    }

    function identcal() { return userStore.newpasswordtow === userStore.newPasswordOne; }

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
                                    value={userStore.newFirm}
                                    onChange={(e) => userStore.newFirm = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Fornavn</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.newFirstName}
                                    onChange={(e)=> userStore.newFirstName = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Efternavn</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.newLastName}
                                onChange={(e)=> userStore.newLastName = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Email</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="email"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.newEmail}
                                    onChange={(e)=> userStore.newEmail = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="password"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.newPasswordOne}
                                    onChange={(e)=> userStore.newPasswordOne = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Gentag password</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="password"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.newpasswordtow}
                                    onChange={(e)=> userStore.newpasswordtow = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <Button
                                onClick={()=>createNewUser()}
                                style={{
                                width: '100%',
                                background:'#637724',
                                borderColor:'#637724'
                            }}>Opret bruger</Button>
                        </Col></Row>
                        <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <Recaptcha
                                sitekey="6LcaJsYUAAAAAHQ7cbFSBUjwcd3MyuDStYbHF6CX"
                                render="explicit"
                                onloadCallback={callback}
                                verifyCallback={verifyCallback}
                            />
                        </Col></Row>
                    </Container>
                </Col>
                    <Col md={{span: 3, offset: 0}}>
                        <Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Password er ikke ens</Toast.Body>
                        </Toast>

                        <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Alle felter skal være udfyldt</Toast.Body>
                        </Toast>
                    </Col> </Row>
            </Container>
        </div>
    );
}));