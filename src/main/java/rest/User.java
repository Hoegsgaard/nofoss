package rest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.morphia.annotations.Entity;
import dev.morphia.annotations.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
    private String username;
    private String token; //CHRISTIAN HVAD ER DETTTE I VIRKELIGHEDEN?



    //@Id @JsonIgnore //
    //private ObjectId _id;

    /*public String getId(){ //Konverterer ObjectID'et til en pæn string
        return _id.toHexString();
    }
    public void setID(String id){ //Konverterer en HexString til ObjectID
        _id = new ObjectId(id);
    }       */
}

