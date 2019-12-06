import React from "react";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import {vehicleStore} from "../stores/VehicleStore";

export function CarCardAdmin({Car}) {
    const {model,brand,price,fuelType,maxWeight,maxRange,imageLink,_id} = Car
    const id = "testID" //CHANGE THIS
    function deleteCar(){
        vehicleStore.deleteVehicle(_id)
    }

    return (
        <Card>
            <Row>
                <Col md={{span: 4, offset: 0}}>
                    <Card.Header>{brand} - {model}</Card.Header>
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
                        <br/>
                        <button type="button" onClick={deleteCar} className="btn btn-danger">SLET KØRETØJ</button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}