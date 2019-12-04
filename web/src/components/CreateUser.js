import {Col, FormControl, InputGroup, Row, Toast} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {newUserStore} from "../stores/NewUserStore";
import {observer} from "mobx-react";
import {agent} from "../stores/Agent";
import Recaptcha from 'react-recaptcha';
import {vehicleStore} from "../stores/VehicleStore";

const passwordHash = require('password-hash');
let isVertified = false;
export const CreateUser = observer(()=> {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function verifyCallback(response) {
        if(response){
            isVertified = true;
        }
    }

    function callback () {
        console.log('Done!!!!');
    }

    function clean() {
        newUserStore.newFirm = "";
        newUserStore.newFirstName = "";
        newUserStore.newLastNameName = "";
        newUserStore.newEmail = "";
        newUserStore.newPasswordOne = "";
        newUserStore.newpasswordtow ="";
    }

    function createNewUser(password) {
        if(newUserStore.newFirm !== ""
        && newUserStore.newFirstName !== ""
        && newUserStore.newLastName !==""
        && newUserStore.newEmail !== ""
        && newUserStore.newPasswordOne !== ""
        && newUserStore.newpasswordtow !== ""
        && isVertified) {

            const hashPass = passwordHash.generate(password);
            if (identcal()) {
                newUserStore.newUser = {
                    firm: newUserStore.newFirm,
                    firstName: newUserStore.newFirstName,
                    lastName: newUserStore.newLastName,
                    email: newUserStore.newEmail,
                    password: hashPass
                };
                clean();
                //TODO Add newUserStore.newUser to database
                //agent.createUser(newUserStore.newUser)
                console.log("Bruger oprettet")
                //TODO Send user to login page
            } else {
                setShow1(true)
            }
        }else{
            setShow2(true)
        }
    }

    function identcal() { return newUserStore.newpasswordtow === newUserStore.newPasswordOne; }

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
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded mr-2"
                                    alt=""
                                />
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Password er ikke ens</Toast.Body>
                        </Toast>

                        <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded mr-2"
                                    alt=""
                                />
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Alle felter skal være udfyldt</Toast.Body>
                        </Toast>
                    </Col> </Row>
            </Container>
        </div>
    );
});