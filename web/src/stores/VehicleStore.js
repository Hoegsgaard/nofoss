import {decorate, observable} from "mobx";

class VehicleStore{
    vehicles = [{brand: "Renault", weight: "2500", fuel: "Gas"},
        {brand: "Renault", weight: "4000", fuel: "Gas"},
        {brand: "Iveco", weight: "3500", fuel: "Gas"},
        {brand: "Iveco", weight: "7000", fuel: "Gas"},
        {brand: "Iveco", weight: "40000", fuel: "Gas"},
        {brand: "Scania", weight: "27000", fuel: "Gas"},
        {brand: "Scania", weight: "40000", fuel: "Gas"},
        {brand: "Volvo", weight: "27000", fuel: "el"},
        {brand: "Volvo", weight: "40000", fuel: "Gas"},
    ];
    newBrand = "";
    newWeight = "";
    newFuel = "";
}

decorate(VehicleStore,{
    vehicles: observable,
    newBrand: observable,
    newWeight: observable,
    newFuel: observable
});

export const vehicleStore = new VehicleStore();
// >:(
