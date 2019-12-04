import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import data.Vehicle;
import org.apache.catalina.mapper.Mapper;
import org.bson.Document;
import rest.JWTHandler;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("mongo")
@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
public class VehicleService {

    private MongoDAO mongoDAO = new MongoDAO();

    @POST
    public void postVehicle(){
        //mongoDAO.addVehicle(new Vehicle());
    }

    @GET
    public String getVehicles() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(mongoDAO.getVehicles());
    }

}
