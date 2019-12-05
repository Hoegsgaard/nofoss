import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import exception.NoImplementationException;
import org.bson.Document;
import rest.JWTHandler;
import rest.LoginData;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
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
    public String getUser() throws NoImplementationException{
        System.out.println("endpoint hit");
        throw new NoImplementationException("GetUser not implemented, yet");
    }

    @Path("login")
    @POST
    public String loginUser(String userData){

        return mongoDAO.loginUser(userData);
    }

}
