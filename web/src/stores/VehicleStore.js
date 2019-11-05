import {decorate, observable} from "mobx";

class VehicleStore{
    vehicles = [
        {brand: 'Volvo', name: '5-53x', price: '2500001', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '1503000', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '35900000', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '2500001', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '1503000', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '35900000', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '2500001', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '1503000', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '35900000', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'},
        {brand: 'Volvo', name: '5-53x', price: '2500001', maxWeight: '696969', maxRange: '420420', fuelType: 'nutella', imageLink: 'https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg'},
        {brand: 'Ford', name: 'D-Linje', price: '1503000', maxWeight: '696969', maxRange: '420420', fuelType: 'mustard', imageLink: 'https://varebilogtransport.dk/wp-content/uploads/2019/05/Ford-F-Max-tyrkisk-truck-3_-1008x516.jpg'},
        {brand: 'Mercedes', name: 'Stor-20', price: '35900000', maxWeight: '696969', maxRange: '420420', fuelType: 'gas', imageLink: 'https://www.mercedesbenzcph.dk/lastbiler/wp-content/uploads/2018/11/18C0490_05022-2000x800.png'}];

    brands = ["Volvo", "Ford", "Mercedes"]

    newBrand = "";
    newName = "";
    newPrice = "";
    newMaxWeight = "";
    newMaxRange = "";
    newFuelType = "";
    newImageLink = "";
}

decorate(VehicleStore,{
    vehicles: observable,
    newBrand: observable,
    newName: observable,
    newPrice: observable,
    newMaxWeight: observable,
    newMaxRange: observable,
    newFuelType: observable,
    newImageLink: observable
});

export const vehicleStore = new VehicleStore();