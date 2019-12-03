import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import rest.JWTHandler;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("mongo")
@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class MongoService {

    private MongoClient mcl = MongoConnector.getInstance().getDb();

    @POST
    @Path("{collection}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void postRandomObjects(@PathParam("collection") String collection, @HeaderParam("Authorization")  String authHeader, Document mongoDoc){
        String token = authHeader.split(" ")[1];
        JWTHandler.validate(token);

        MongoDatabase db = mcl.getDatabase(collection);
        MongoCollection vehicleCollection = db.getCollection("Vehicles");
        vehicleCollection.insertOne(new Document("brand","Volvo").append("name","123123").append("price","696969").append("fuelType","nutella"));
    }
}
