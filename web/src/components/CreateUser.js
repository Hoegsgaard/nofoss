import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

export function CreateUser() {
    return (
        <section>
            <Col><Row>
                <text>Email</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>

            <Col><Row>
                <text>Password</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>
            <Col><Row>
                <text>Password Confirm</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>

            <Col><Row>
                <text>First Name</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>

            <Col><Row>
                <text>Last Name</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>

            <Col><Row>
                <text>Firm</text>
            </Row></Col>
            <Col><Row><InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup></Row></Col>
        </section>
    );
}