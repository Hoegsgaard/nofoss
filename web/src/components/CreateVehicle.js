import {observer} from "mobx-react";
import {Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import {vehicleStore} from "../stores/VehicleStore";

export const CreateVehicle = observer(() => {
    return (
        <div>
            <Container>
                <Row><Col md={{span: 6, offset: 3}}
                          style={{
                              background: '#fff',
                              padding: '20pt',
                              border: '1px solid',
                              borderColor: '#d8dee2',
                              borderRadius: "5pt"
                          }}>
                    <Container>
                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Brand</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newBrand}
                                    onChange={(e) => vehicleStore.newBrand = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Weight</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newWeight}
                                    onChange={(e) => vehicleStore.newWeight = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Fuel</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newFuel} onChange={(e) => vehicleStore.newFuel = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <Button onClick={() => vehicleStore.vehicles.push({
                                brand: vehicleStore.newBrand,
                                model: vehicleStore.newModel,
                                price: vehicleStore.newFuel
                            })} style={{
                                width: '100%',
                                background: '#637724',
                                borderColor: '#637724'
                            }}>Opret Køretøj</Button>
                        </Col></Row>
                    </Container>
                </Col></Row>
            </Container>
        </div>


    );
})