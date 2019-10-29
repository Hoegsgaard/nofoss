import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CarCardList} from "./CarCardList";

export const SearchVehicleNew = () => {
    return (
        <Container>
                <Row>
                    <Col>THIS ELEMENT FILLS 1/3 AND IS GONNA CONTAIN A SEARCH AREA THIS ELEMENT FILLS 1/3 AND IS GONNA
                        CONTAIN A SEARCH AREA THIS ELEMENT FILLS 1/3 AND IS GONNA CONTAIN A SEARCH AREA
                        THIS ELEMENT FILLS 1/3 AND IS GONNA CONTAIN A SEARCH AREA</Col>
                    <Col xs={8}><CarCardList/></Col>
                </Row>
        </Container>
    )
}