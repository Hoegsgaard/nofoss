import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";
import {CreateUser} from "./CreateUser";

export const LogIn = () => {
    return (
        <div style={{
            position: 'absolute', left: '50%',
            transform: 'translate(-50%, 50%)'
        }}>
            <Row>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </Row>
            <br/>
            <Row>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </Row>
            <Row style={{position: 'absolute', left: '50%',
                transform: 'translate(-50%, 50%)'}}>
                <Button >I DO NOTHING :)</Button>
                <Link to={CreateUser()}>YEET</Link>
            </Row>
        </div>
    )
};