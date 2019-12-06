package rest;

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
