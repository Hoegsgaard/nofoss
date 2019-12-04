import data.Vehicle;

import java.util.List;

public interface VehiclesDAO {

    //GET
    List<Vehicle> getVehicles();

    //POST
    void addVehicle(Vehicle vehicle);

    //DELETE
    void deleteVehicle(Vehicle vehicle);




}
