import {computed, decorate, observable} from "mobx";

class VehicleStore{
    brands = ["Volvo", "Renault", "Iveco","Scania"];
    vehicles = [
        {brand: 'Volvo', name: '5-53x', price: '550000', maxWeight: '40000', maxRange: '1000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Volvo', name: '6-63x', price: '500000', maxWeight: '27000', maxRange: '2000', fuelType: 'El', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Scania', name: '123', price: '450000', maxWeight: '40000', maxRange: '1000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Scania', name: '321', price: '350000', maxWeight: '27000', maxRange: '2000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', name: 'abc', price: '250000', maxWeight: '3500', maxRange: '750', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', name: 'def', price: '300000', maxWeight: '7000', maxRange: '1400', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Iveco', name: 'ghi', price: '400000', maxWeight: '40000', maxRange: '2000', fuelType: 'Gas', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Renault', name: 'lille', price: '300000', maxWeight: '2500', maxRange: '1000', fuelType: 'el', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Renault', name: 'Stor', price: '350000', maxWeight: '4000', maxRange: '1500', fuelType: 'el', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
    ];

    newBrand = "";
    newName = "";
    newPrice = "";
    newMaxWeight = "";
    newMaxRange = "";
    newFuelType = "";
    newImageLink = "";

    selectedBrands = [""];
    searchName = "";
    searchMinWeight = 0.0;
    searchMaxWeight = 0.0;
    searchMinRange = 0.0;
    searchMaxRange = 0.0;

    get filteredVehicles(){
        console.log("SearchWeight" + this.searchMinWeight);
        console.log("SearchWeight" + this.searchMaxWeight);
        console.log("SearchWeight" + this.searchMinRange);
        console.log("SearchWeight" + this.searchMaxRange);
        return (
            vehicleStore.vehicles.filter(vehicle =>
                ((this.selectedBrands.length <=1 || this.selectedBrands.includes(vehicle.brand))
                    && vehicle.name.toLowerCase().includes(this.searchName.toLowerCase())
                    && ((this.searchMinWeight == 0.0) || Number(vehicle.maxWeight) >= Number(this.searchMinWeight))
                    && ((this.searchMaxWeight == 0.0) || Number(vehicle.maxWeight) <= Number(this.searchMaxWeight))
                    && ((this.searchMinRange == 0.0) || Number(vehicle.maxRange) >= Number(this.searchMinRange))
                    && ((this.searchMaxRange == 0.0) || Number(vehicle.maxRange) <= Number(this.searchMaxRange)))
            )
        )
        //return this.vehicles
    }

}







decorate(VehicleStore,{
    vehicles: observable,
    newBrand: observable,
    newName: observable,
    newPrice: observable,
    newMaxWeight: observable,
    newMaxRange: observable,
    newFuelType: observable,
    newImageLink: observable,
    selectedBrands: observable,
    searchName: observable,
    searchMinWeight: observable,
    searchMaxWeight: observable,
    searchMinRange: observable,
    searchMaxRange: observable,
    filteredVehicles: computed,

});

export const vehicleStore = new VehicleStore();