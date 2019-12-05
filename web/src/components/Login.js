import {observer} from "mobx-react";
import {Col, FormControl, InputGroup, Row, Toast} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CreateUser} from "./CreateUser";
import Container from "react-bootstrap/Container";
import {userStore} from "../stores/UserStore";
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-login';
import {agent} from "../stores/Agent";
import React, {useState} from "react";
import {vehicleStore} from "../stores/VehicleStore";

export const LogIn = observer( () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function login() {
        if(userStore.loginData.username !== ""
        && userStore.loginData.password !== "") {
            userStore.doLogin();
            if (userStore.state !== userStore.loginStates.LOGGED_IN && userStore.state !== userStore.loginStates.LOGGING_IN){
                console.log((userStore.state));
                userStore.loginData.password = "";
                setShow1(true);
            }
        }else{
            setShow2(true);
        }
    }

    const responseGoogle = (response) => {
        if(response.w3.U3){
            agent.doGoogleLogin(response.accessToken, response.w3.U3)
        }
    };
    return (
        <div>
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
                            <text>Email</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.loginData.username}
                                    onChange={(e) => userStore.loginData.username = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Password</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    id="passwordText"
                                    type="password"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={userStore.loginData.password}
                                    onChange={(e) => userStore.loginData.password = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row>
                            <Col md={{span: 5, offset: 1}}>
                                <Button onClick={login} style={{
                                    width: '100%',
                                    background:'#637724',
                                    borderColor:'#637724'
                                }}>Login</Button>
                            </Col>
                            <Col md={{span: 5, offset: 0}}>
                                <Button href="#/create/User"
                                        style={{
                                    width: '100%',
                                    background: '#fff',
                                    border: '1px solid',
                                    borderColor: '#637724',
                                    color:'#637724'
                                }}>Opret bruger</Button >
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span: 5, offset: 1}}
                                 style={{
                                     paddingTop: '5pt'}}>
                                <GoogleLogin
                                    clientId="535992274215-0i5rm3il5tt76ds4k3a6048pjocvcmob.apps.googleusercontent.com"
                                    buttonText="Login med Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'
                                    }/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                    <Col><Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Nofoss</strong>
                        </Toast.Header>
                        <Toast.Body>Email og password stemmer ikke over ens</Toast.Body>
                    </Toast>

                    <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Nofoss</strong>
                        </Toast.Header>
                        <Toast.Body>Alle felter skal være udfyldt</Toast.Body>
                    </Toast></Col></Row>
            </Container>
        </div>
    )
});

