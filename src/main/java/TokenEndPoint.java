

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

public class TokenEndPoint {
    @Path("login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public class LoginService {

        @POST
        public String postLoginData(LoginData login) throws NotAuthorizedException
        {
            if (login!=null && "brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
                return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
            }
            throw new NotAuthorizedException("forkert brugernavn/kodeord");
        }

    }

    public class NotAuthorizedException extends Throwable {
        public NotAuthorizedException(String s) {
            super((s));
        }
    }

    @Provider
    public class NotAuthorizedExceptionMapper implements ExceptionMapper<NotAuthorizedException> {

        @Override
        public Response toResponse(NotAuthorizedException e) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(e.getMessage()).build();
        }
    }

}
