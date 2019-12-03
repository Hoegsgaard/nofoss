package rest;

import javax.annotation.PostConstruct;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TokenEndPoint {
    @POST
    public String postLoginData(LoginData login) throws NotAuthorizedException {
        if (login != null && "nofoss".equals(login.getUsername().toLowerCase()) && "kodeord".equals(login.getPassword())) {
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""/*new ObjectId("5dc0ad700000000000000000")*/));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }
}

