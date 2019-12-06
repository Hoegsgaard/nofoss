package data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.morphia.annotations.Entity;
import dev.morphia.annotations.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

@Data
@Entity
public class Vehicle {

    public Vehicle(String _id, String brand, String name, String price, String weight, String range, String fuelType, String imageLink){
        this._id=_id;
        this.brand=brand;
        this.name=name;
        this.price=price;
        this.weight=weight;
        this.range=range;
        this.fuelType=fuelType;
        this.imageLink=imageLink;
    };

    private String _id;
    private String brand;
    private String name;
    private String price;
    private String weight;
    private String range;
    private String fuelType;
    private String imageLink;

}
