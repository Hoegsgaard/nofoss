import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import rest.JWTHandler;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("user")
@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class UserService {

    private MongoDAO mongoDAO = new MongoDAO();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postRandomObjects(){

    }

    @GET
    public List<String> getVehicles(){
        return null;

    }

}
