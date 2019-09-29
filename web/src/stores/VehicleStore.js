import {decorate, observable} from "mobx";

export default class VehicleStore{
    giraffes = ["Marius","Melman"];
}

decorate(VehicleStore,{
    giraffes: observable
});