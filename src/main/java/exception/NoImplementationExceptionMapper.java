package exception;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
class NoImplementationExceptionMapper implements ExceptionMapper<NoImplementationException> {

    @Override
    public Response toResponse(NoImplementationException e) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).entity(e.getMessage()).build();
    }
}
