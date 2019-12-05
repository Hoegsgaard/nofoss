import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import rest.JWTHandler;
import rest.LoginData;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("user")
@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class UserService {

    private MongoDAO mongoDAO = new MongoDAO();

    @POST
    public void createUser(String newUser) {
        mongoDAO.addUser(newUser);
    }

    @GET
    public List<String> getVehicles(){
        return null;

    }

    @Path("login")
    @POST
    public String loginUser(String userData){

        return mongoDAO.loginUser(userData);
    }

}
