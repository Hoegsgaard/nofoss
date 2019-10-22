import {observer} from "mobx-react";
import {FormControl, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import {vehicleStore} from "./stores/VehicleStore";

export const CreateVehicle = observer(()=>{
    return (
        <section>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehicleBrand">Brand</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Brand"
                    aria-describedby="inputGroup-sizing-default"
                    value = {vehicleStore.newBrand} onChange={(e)=>vehicleStore.newBrand=e.target.value}
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehicleName">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Name"
                    aria-describedby="inputGroup-sizing-default"
                    value = {vehicleStore.newName}  onChange={(e)=>vehicleStore.newName=e.target.value}
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="vehiclePrice">Price</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Price"
                    aria-describedby="inputGroup-sizing-default"
                    value = {vehicleStore.newPrice} onChange={(e)=>vehicleStore.newPrice=e.target.value}
                />
            </InputGroup>
            <Button onClick={() => vehicleStore.vehicles.push({brand:vehicleStore.newBrand,name:vehicleStore.newName,price:vehicleStore.newPrice})}>Opret Køretøj</Button>
        </section>
    );
})