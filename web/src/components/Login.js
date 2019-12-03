import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";
import {CreateUser} from "./CreateUser";
import Container from "react-bootstrap/Container";
import {userStore} from "../stores/UserStore";
import GoogleLogin from 'react-google-login';
import {agent} from "../stores/Agent";

export const LogIn = () => {
    const responseGoogle = (response) => {
        //console.log(response);
        if(response.w3.U3){
            agent.doGoogleLogin(response.accessToken, response.w3.U3)
        }
    }
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
                            <Col md={{span: 5, offset: 1}}>
                                <GoogleLogin
                                    clientId="535992274215-0i5rm3il5tt76ds4k3a6048pjocvcmob.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'
                                    }/>
                            </Col>
                        </Row>
                    </Container>
                </Col></Row>
            </Container>
        </div>
    )
};

function login() {
    userStore.doLogin();
}