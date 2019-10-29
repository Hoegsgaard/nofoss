import React from "react";
import {CarCard} from "./CarCard";
import {vehicleStore} from "../stores/VehicleStore.js";

export function CarCardList() {
    const cardsArray = vehicleStore.vehicles.map(vehicle => (
        <CarCard
            brand={vehicle.brand}
            name={vehicle.name}
            price={vehicle.price}
            fuelType={vehicle.fuelType}
            maxRange={vehicle.maxRange}
            maxWeight={vehicle.maxWeight}
            imageLink={vehicle.imageLink}
        />
    ));

    return (
        <div>
            {cardsArray}
        </div>
    );
}