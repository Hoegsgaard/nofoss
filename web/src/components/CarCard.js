import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";

export function CarCard({name,brand,price,fuelType,maxWeight,maxRange,imageLink}) {
    return (
        <Card>
            <Row>
                <Col md={{span: 4, offset: 0}}>
                    <Card.Header>{brand} - {name}</Card.Header>
                    <Card.Body>
                        <img style={{width: '100%'}} src={imageLink} alt="Billede af bil"/>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Body>
                        Pris: {price} kr.
                        <br/>
                        Totalvægt: {maxWeight} kg.
                        <br/>
                        Total rækkevidde: {maxRange} km.
                        <br/>
                        Brændstof: {fuelType}.
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}