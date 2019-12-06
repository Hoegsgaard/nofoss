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
    searchMinWeight = "";
    searchMaxWeight = "";
    searchMinRange = "";
    searchMaxRange = "";

    get filteredVehicles(){
        return vehicleStore.vehicles.filter(vehicle =>
                ((this.selectedBrands.length <=1 || this.selectedBrands.includes(vehicle.brand))
                    && (this.selectedFuelTypes.length <=1 || this.selectedFuelTypes.includes(vehicle.fuelType))
                    && vehicle.model.toLowerCase().includes(this.searchModel.toLowerCase())
                    && ((this.searchMinWeight === "") || Number(vehicle.maxWeight) >= Number(this.searchMinWeight))
                    && ((this.searchMaxWeight === "") || Number(vehicle.maxWeight) <= Number(this.searchMaxWeight))
                    && ((this.searchMinRange === "") || Number(vehicle.maxRange) >= Number(this.searchMinRange))
                    && ((this.searchMaxRange === "") || Number(vehicle.maxRange) <= Number(this.searchMaxRange)))
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