import {computed, decorate, observable} from "mobx";

class VehicleStore{
    vehicles = [
        {brand: 'Volvo', name: '5-53x', price: '952', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '832', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '849', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '666', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '139', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '452', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '696', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '999', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '123', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '250', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '150', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '359', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'}];

    brands = ["Volvo", "Ford", "Mercedes"];


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