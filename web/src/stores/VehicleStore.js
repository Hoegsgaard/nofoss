import {computed, decorate, observable} from "mobx";
import {agent} from "../stores/Agent";

class VehicleStore{

    constructor() {
        agent.doVehicleFetch()
    }

    response;
    vehicles = [];
    brands = ["Volvo", "Renault", "Iveco","Scania"];
    fuelType = ["Gas", "El"];

    newBrand = "";
    newModel = "";
    newPrice = "";
    newMaxWeight = "";
    newMaxRange = "";
    newFuelType = "";
    newImageLink = "";

    selectedBrands = [""];
    selectedFuelTypes = [""];
    searchModel = "";
    searchMinWeight = 0.0;
    searchMaxWeight = 0.0;
    searchMinRange = 0.0;
    searchMaxRange = 0.0;

    get filteredVehicles(){
        return vehicleStore.vehicles.filter(vehicle =>
                ((this.selectedBrands.length <=1 || this.selectedBrands.includes(vehicle.brand))
                    && (this.selectedFuelTypes.length <=1 || this.selectedFuelTypes.includes(vehicle.fuelType))
                    && vehicle.model.toLowerCase().includes(this.searchModel.toLowerCase())
                    && ((this.searchMinWeight === 0.0) || Number(vehicle.maxWeight) >= Number(this.searchMinWeight))
                    && ((this.searchMaxWeight === 0.0) || Number(vehicle.maxWeight) <= Number(this.searchMaxWeight))
                    && ((this.searchMinRange === 0.0) || Number(vehicle.maxRange) >= Number(this.searchMinRange))
                    && ((this.searchMaxRange === 0.0) || Number(vehicle.maxRange) <= Number(this.searchMaxRange)))
            )
    }

    deleteVehicle(vehicleID){
        this.vehicles=this.vehicles.filter(vehicle => vehicle._id!==vehicleID)
        agent.deleteVehicle(vehicleID)
    }

}

decorate(VehicleStore,{
    vehicles: observable,
    newBrand: observable,
    newModel: observable,
    newPrice: observable,
    newMaxWeight: observable,
    newMaxRange: observable,
    newFuelType: observable,
    newImageLink: observable,
    selectedBrands: observable,
    selectedFuelTypes: observable,
    searchModel: observable,
    searchMinWeight: observable,
    searchMaxWeight: observable,
    searchMinRange: observable,
    searchMaxRange: observable,
    filteredVehicles: computed,
});

export const vehicleStore = new VehicleStore();