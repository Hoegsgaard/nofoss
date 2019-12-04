import {computed, decorate, observable} from "mobx";


const baseUrl = "http://localhost:8080/rest/"

class VehicleStore{
    response;
    vehicles = [];
    brands = ["Volvo", "Renault", "Iveco","Scania"];
    fuelType = ["Gas", "El"];

        /*vehicles = [
        {brand: 'Volvo', model: '5-53x', price: '550000', maxWeight: '40000', maxRange: '1000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Volvo', model: '6-63x', price: '500000', maxWeight: '27000', maxRange: '2000', fuelType: 'El', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Scania', model: '123', price: '450000', maxWeight: '40000', maxRange: '1000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Scania', model: '321', price: '350000', maxWeight: '27000', maxRange: '2000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', model: 'abc', price: '250000', maxWeight: '3500', maxRange: '750', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', model: 'def', price: '300000', maxWeight: '7000', maxRange: '1400', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', model: 'ghi', price: '400000', maxWeight: '40000', maxRange: '2000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Renault', model: 'lille', price: '300000', maxWeight: '2500', maxRange: '1000', fuelType: 'El', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Renault', model: 'Stor', price: '350000', maxWeight: '4000', maxRange: '1500', fuelType: 'El', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
    ];*/

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
        if(vehicleStore.vehicles[0]!=null){
            vehicleStore.vehicles.filter(vehicle =>
                ((this.selectedBrands.length <=1 || this.selectedBrands.includes(vehicle.brand))
                    && (this.selectedFuelTypes.length <=1 || this.selectedFuelTypes.includes(vehicle.fuelType))
                    && vehicle.model.toLowerCase().includes(this.searchModel.toLowerCase())
                    && ((this.searchMinWeight === 0.0) || Number(vehicle.maxWeight) >= Number(this.searchMinWeight))
                    && ((this.searchMaxWeight === 0.0) || Number(vehicle.maxWeight) <= Number(this.searchMaxWeight))
                    && ((this.searchMinRange === 0.0) || Number(vehicle.maxRange) >= Number(this.searchMinRange))
                    && ((this.searchMaxRange === 0.0) || Number(vehicle.maxRange) <= Number(this.searchMaxRange)))
            )
        }
        return (
            vehicleStore.vehicles
        )
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