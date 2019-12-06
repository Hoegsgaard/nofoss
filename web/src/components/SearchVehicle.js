import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {vehicleStore} from "../stores/VehicleStore";
import {CarCard} from "./CarCard";
import {CarCardAdmin} from "./CarCardAdmin";
import {FormControl, InputGroup} from "react-bootstrap";
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {observer} from "mobx-react";

export const SearchVehicle = observer(() => {

    /*Contains checkbox boolean setting TODO: implement these with brandArray*/
    const [state, setState] = React.useState({
        Volvo: true,
        Mercedes: true,
        Ford: true
    });

    const checkboxChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    const brandBoxArray = vehicleStore.brands.map((brand, key) =>
        <FormControlLabel key={key}
                          control={
                              <Checkbox
                                  //checked={true}
                                  //onChange={checkboxChange(brand)}
                                  value={brand}
                                  onChange={(e) => {
                                      if (e.target.checked) {
                                          vehicleStore.selectedBrands.push(brand)
                                      } else {
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

    const fuelBoxArray = vehicleStore.fuelType.map((brand, key) =>
        <FormControlLabel key={key}
                          control={
                              <Checkbox
                                  //checked={true}
                                  //onChange={checkboxChange(brand)}
                                  value={brand}
                                  onChange={(e) => {
                                      if (e.target.checked) {
                                          vehicleStore.selectedFuelTypes.push(brand)
                                      } else {
                                          var index = vehicleStore.selectedFuelTypes.indexOf(e.target.value);
                                          if (index > -1) {
                                              vehicleStore.selectedFuelTypes.splice(index, 1);
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
                    <Row>
                        {brandBoxArray}
                    </Row>
                    <Typography gutterBottom>Model</Typography>
                    <Row>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e) => vehicleStore.searchModel = e.target.value}
                            />
                        </InputGroup>
                    </Row>

                    <Typography gutterBottom>Vægt</Typography>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">min</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => vehicleStore.searchMinWeight = e.target.value}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">kg.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">max</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => vehicleStore.searchMaxWeight = e.target.value}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">kg.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Typography gutterBottom>Rækkevidde</Typography>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">min</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => vehicleStore.searchMinRange = e.target.value}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">km.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">max</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => vehicleStore.searchMaxRange = e.target.value}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">km.</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Typography gutterBottom>Drivmiddel</Typography>
                    <Row>
                        {fuelBoxArray}
                    </Row>
                </Col>
                <Col xs={8} style={{overflow: 'scroll'}}>
                        {vehicleStore.filteredVehicles.map(vehicle =>
                            /*Here should be a filter to only insert the cards passing the filter into the cardArray*/
                            <CarCardAdmin Car={vehicle}/>)}
                </Col>
            </Row>
        </Container>
    )
})