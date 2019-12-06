package rest;

import Handler.JWTHandler;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import data.User;
import data.Vehicle;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.mindrot.jbcrypt.BCrypt;

import javax.ws.rs.NotAuthorizedException;
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
    public void addUser(String user) {
        MongoCollection<Document> docs = mdb.getCollection("Users");
        Document document = new Document(Document.parse(user));
        String hashedPassword = BCrypt.hashpw(document.getString("password"), BCrypt.gensalt());
        document.remove("password");
        document.append("hashPW", hashedPassword);
        docs.insertOne(document);
    }

    @Override
    public void deleteUser(String user) {

    }

    @Override
    public String loginUser(String loginString){
        MongoCollection<Document> docs = mdb.getCollection("Users");
        Document document = new Document(Document.parse(loginString));
        Bson filter = Filters.eq("email", document.get("username"));
        Document dbUser = docs.find(filter).first();
        if(dbUser != null){
            if(BCrypt.checkpw(document.get("password").toString(), dbUser.getString("hashPW"))){
                return JWTHandler.generateJwtToken(new User(document.get("username").toString(), ""));
            }
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @Override
    public List<Vehicle> getVehicles() {
        MongoCollection<Document> docs = mdb.getCollection("Vehicles");
        List<Vehicle> vehicles = new ArrayList<>();

        for(Document d : docs.find()){
            vehicles.add(new Vehicle(
                    d.getObjectId("_id").toHexString(),
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
    public void addVehicle(String vehicle){
        MongoCollection<Document> docs = mdb.getCollection("Vehicles");
        Document document = new Document(Document.parse(vehicle));
        docs.insertOne(document);
    }

    @Override
    public void deleteVehicle(String vehicleIDHex) {
        MongoCollection<Document> docs = mdb.getCollection("Vehicles");
        Bson filter = Filters.eq("_id", new ObjectId(vehicleIDHex));
        docs.deleteOne(filter);
    }
}
