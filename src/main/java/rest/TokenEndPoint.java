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

/*
[FATAL] A resource model has ambiguous (sub-)resource method for HTTP method POST and input mime-types as defined
by"@Consumes" and "@Produces" annotations at Java methods
public java.lang.String rest.TokenEndPoint.postLoginData(rest.LoginData) throws javax.ws.rs.NotAuthorizedException and
public java.lang.String TokenEndPoint$LoginService.postLoginData(LoginData) throws TokenEndPoint$NotAuthorizedException
  at matching regular expression /login.
  These two methods produces and consumes exactly the same mime-types and therefore their invocation as a resource methods will always fail.; source='org.glassfish.jersey.server.model.RuntimeResource@3c130cb2']

 */

    @POST
    public String postLoginDataxx(LoginData login) throws NotAuthorizedException {
        if (login != null && "nofoss".equals(login.getUsername()) && "kodeord".equals(login.getPassword())) {
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""/*new ObjectId("5dc0ad700000000000000000")*/));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }
}
/*



    @POST
    @Path("tokentest")
    public String getToken(String token){
            User validate = null;
            validate = JWTHandler.validate(token);
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
*/

