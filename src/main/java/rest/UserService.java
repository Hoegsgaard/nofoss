package rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import exception.NoImplementationException;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

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
    public String getUser() throws NoImplementationException, JsonProcessingException{
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(mongoDAO.getUser());

    }

    @Path("login")
    @POST
    public String loginUser(String userData){

        return mongoDAO.loginUser(userData);
    }

}
