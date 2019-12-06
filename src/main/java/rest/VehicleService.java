package rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("mongo")
@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class VehicleService {

    private MongoDAO mongoDAO = new MongoDAO();

    @POST
    public void postVehicle(String newVehicle){
        mongoDAO.addVehicle(newVehicle);
    }

    @GET
    public String getVehicles() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(mongoDAO.getVehicles());
    }

    @DELETE
    @Path("{vehicleIDHex}")
    public void deleteVehicle(@PathParam("vehicleIDHex") String vehicleIDHex) {
        mongoDAO.deleteVehicle(vehicleIDHex);
    }

}
