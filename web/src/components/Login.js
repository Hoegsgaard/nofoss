import {FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

export const LogIn = ()=> {
    return (
        <section>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br/>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Button>I DO NOTHING :)</Button>
        </section>
    )};