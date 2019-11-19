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
import {observer} from "mobx-react";

export const SearchVehicleNew = observer(() => {

    const [value, setValue] = React.useState([0, 100]);

    /*Contains checkbox boolean setting TODO: implement these with brandArray*/
    const [state, setState] = React.useState({
        Volvo:true,
        Mercedes:true,
        Ford:true
    });

    const checkboxChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    const sliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const checkBoxArray = vehicleStore.brands.map((brand,key) =>
        <FormControlLabel key={key}
            control={
                <Checkbox
                    //checked={true}
                    //onChange={checkboxChange(brand)}
                    value={brand}
                    onChange = {(e) => {
                        if(e.target.checked){
                            vehicleStore.selectedBrands.push(brand)
                            console.log(vehicleStore.selectedBrands)
                        }else{
                            var index = vehicleStore.selectedBrands.indexOf(e.target.value);
                            if (index > -1) {
                                vehicleStore.selectedBrands.splice(index, 1);
                            }
                        }
                        }
                    }
                />
            }
            label={brand}
        />
    )

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
                            onChange={ (e) => vehicleStore.searchName = e.target.value}
                        />
                    </InputGroup>

                    <Typography gutterBottom>Max vægt</Typography>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => vehicleStore.searchWeight = e.target.value}
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
                            onChange={(e) => vehicleStore.searchRange = e.target.value}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">km.</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                </Col>
                <Col xs={8}>{vehicleStore.filteredVehicles.map(vehicle =>
                        /*Here should be a filter to only insert the cards passing the filter into the cardArray*/
                        <CarCard Car={vehicle}/>
                )}</Col>
            </Row>
        </Container>
    )
})