import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {vehicleStore} from "../stores/VehicleStore";
import {CarCard} from "./CarCard";
import Button from "react-bootstrap/Button";
import {FormControl, InputGroup} from "react-bootstrap";
import Slider from "@material-ui/core/Slider/Slider";
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const SearchVehicleNew = () => {

    /*Contains checkbox boolean setting TODO: implement these with brandArray*/
    const [state, setState] = React.useState({
        Volvo:true,
        Mercedes:true,
        Ford:true
    });
    const [value, setValue] = React.useState([0, 100]);
    const brandArray = []
    const cardArray = []

    /*For each vehicle we insert data in arrays to do further work it*/
    vehicleStore.vehicles.map(vehicle => (
        brandArray.push(vehicle.brand),

        /*Here should be a filter to only insert the cards passing the filter into the cardArray*/

        cardArray.push(<CarCard Car={vehicle}/>)
    ));

    const checkboxChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    const sliderChange = (event, newValue) => {
        setValue(newValue);
    };

    /*TODO: change checkboxChange reference and checked reference to {brand}-object instead of hardcoded string.  */
    const checkBoxArray = brandArray.map(brand => (
        <FormControlLabel
            control={
                <Checkbox
                    checked={state.Volvo}
                    onChange={checkboxChange("Volvo")}
                    value={brand}
                />
            }
            label={brand}
        />
    ))

    return (
        <Container>
            <Row>
                <Col>
                    <Typography gutterBottom>Mærke</Typography>
                    {checkBoxArray}

                    <Typography gutterBottom>Navn</Typography>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <Typography id="range-slider" gutterBottom>Pris</Typography>
                    <Slider
                        value={value}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        onChange={sliderChange}
                        aria-valuemax={1000000}
                        aria-valuemin={10}
                    />

                    <Typography gutterBottom>Max vægt</Typography>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">kg.</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <Typography gutterBottom>Max rækkevidde</Typography>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">km.</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <Button style={{width: '100%'}}>Search, but I dont do anything :) </Button>

                </Col>
                <Col xs={8}>{cardArray}</Col>
            </Row>
        </Container>
    )
}