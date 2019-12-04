import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import data.User;
import data.Vehicle;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class MongoDAO implements VehiclesDAO,UserDAO{

    public MongoDAO(){}

    private MongoDatabase mdb = MongoConnector.getInstance("dummyData").getDb();

    @Override
    public String getUser() {
        return null;
    }

    @Override
    public void addUser(User user) {

    }

    @Override
    public void deleteUser(User user) {

    }

    @Override
    public List<Vehicle> getVehicles() {
        MongoCollection<Document> docs = mdb.getCollection("Vehicles");
        List<Vehicle> vehicles = new ArrayList<>();

        for(Document d : docs.find()){
            vehicles.add(new Vehicle(
                    d.getString("brand"),
                    d.getString("name"),
                    d.getString("price"),
                    d.getString("weight"),
                    d.getString("range"),
                    d.getString("fuelType"),
                    d.getString("imageLink"))
            );
        }

        return vehicles;
    }

    @Override
    public void addVehicle(Vehicle vehicle) {

    }

    @Override
    public void deleteVehicle(Vehicle vehicle) {

    }
}
