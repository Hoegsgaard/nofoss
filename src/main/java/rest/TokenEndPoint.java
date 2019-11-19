package rest;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
@Path("login")
//@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class TokenEndPoint {

    @GET
    public String test(){
        return "Test";
    }

    @POST
    public String postLoginData(LoginData login) throws NotAuthorizedException{
        if (login!=null && "brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""/*new ObjectId("5dc0ad700000000000000000")*/));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    @GET
    @Path("tokentest")
    public String postToken(String token){
        User validate = null;
        try {
            validate = JWTHandler.validate(token);
        } catch (NotAuthorizedException e) {
            e.printStackTrace();
        }
        return validate.toString();
    }
}

class NotAuthorizedException extends Throwable {
    public NotAuthorizedException(String s) {
        super((s));
    }
}

@Provider
class NotAuthorizedExceptionMapper implements ExceptionMapper<NotAuthorizedException> {

    @Override
    public Response toResponse(NotAuthorizedException e) {
        return Response.status(Response.Status.UNAUTHORIZED).entity(e.getMessage()).build();
    }
}
