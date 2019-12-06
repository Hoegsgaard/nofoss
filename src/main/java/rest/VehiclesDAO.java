package rest;

import data.Vehicle;

import java.util.List;

public interface VehiclesDAO {

    //GET
    List<Vehicle> getVehicles();

    //POST
    void addVehicle(String vehicle);

    //DELETE
    void deleteVehicle(String vehicleID);




}
