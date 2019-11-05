import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.morphia.annotations.Id;
import lombok.Data;
import org.bson.types.ObjectId;

@Data
public class User {
    @Id
    @JsonIgnore //
    private ObjectId _id;
    private String username;

    public User(String username, String s) {
        this.username = username;
    }

    public String getId(){ //Konverterer ObjectID'et til en pæn string
        return _id.toHexString();
    }
    public void setID(String id){ //Konverterer en HexString til ObjectID
        _id = new ObjectId(id);
    }
}
