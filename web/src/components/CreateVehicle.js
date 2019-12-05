import {observer} from "mobx-react";
import {Col, Container, FormControl, InputGroup, Row, Toast} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {vehicleStore} from "../stores/VehicleStore";
import {agent} from "../stores/Agent";

export const CreateVehicle = observer(() => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function clean() {
        vehicleStore.newBrand = "";
        vehicleStore.newModel = "";
        vehicleStore.newFuelType = "";
        vehicleStore.newMaxWeight = "";
        vehicleStore.newMaxRange = "";
        vehicleStore.newPrice ="";
        vehicleStore.newImageLink="";
    }

    function opretKøretøj() {
        if(vehicleStore.newBrand !== ""
            && vehicleStore.newModel !== ""
            && vehicleStore.newFuelType !== ""
            && vehicleStore.newMaxWeight !== ""
            && vehicleStore.newMaxRange !== ""
            && vehicleStore.newPrice !==""
            && vehicleStore.newImageLink !=="") {

            vehicleStore.vehicles.push({
                brand: vehicleStore.newBrand,
                model: vehicleStore.newModel,
                fuelType: vehicleStore.newFuelType,
                maxWeight: vehicleStore.newMaxWeight,
                maxRange: vehicleStore.newMaxRange,
                price: vehicleStore.newPrice,
                imageLink: vehicleStore.newImageLink
            });
            agent.createVehicle()
            clean();
            setShow1(true)
        }else {
            setShow2(true)
        }
    }

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
                            <text>Mærke</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newBrand}
                                    onChange={(e) => vehicleStore.newBrand = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Model navn / nr.</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newModel}
                                    onChange={(e) => vehicleStore.newModel = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Drivmiddel</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newFuelType}
                                    onChange={(e) => vehicleStore.newFuelType = e.target.value}

                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Max vægt</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newMaxWeight}
                                    onChange={(e) => vehicleStore.newMaxWeight = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Max rækkevidde</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newMaxRange}
                                    onChange={(e) => vehicleStore.newMaxRange = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Pris</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newPrice}
                                    onChange={(e) => vehicleStore.newPrice = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <text>Link til billede</text>
                            <InputGroup className="mb-3">
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={vehicleStore.newImageLink}
                                    onChange={(e) => vehicleStore.newImageLink = e.target.value}
                                />
                            </InputGroup></Col></Row>

                        <Row><Col md={{span: 10, offset: 1}}>
                            <Button onClick={() => {opretKøretøj()}}
                                    style={{
                                width: '100%',
                                background: '#637724',
                                borderColor: '#637724'
                            }}>Opret Køretøj</Button>
                        </Col></Row>
                    </Container>
                </Col>

                    <Col md={{span: 3, offset: 0}}>
                        <Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Køretøj oprettet</Toast.Body>
                        </Toast>

                        <Toast onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">Nofoss</strong>
                            </Toast.Header>
                            <Toast.Body>Alle felter skal være udfyldt</Toast.Body>
                        </Toast>
                    </Col>

                </Row>
            </Container>
        </div>
    );
})
