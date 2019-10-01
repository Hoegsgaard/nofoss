import {decorate, observable} from "mobx";

export default class VehicleStore{
    vehicles = [{"brand": "Volvo", "name": "5-53x", "price": "2500001"},
        {"brand": "Suzuki", "name": "Swift", "price": "1503000"},
        {"brand": "Mercedes", "name": "Stor-20", "price": "35900000"}
    ];
}

decorate(VehicleStore,{
    vehicles: observable
});