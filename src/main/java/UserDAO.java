import data.Vehicle;
import data.User;

import java.util.List;

public interface UserDAO {

    //GET
    String getUser();

    //POST
    void addUser(User user);

    //DELETE
    void deleteUser(User user);




}
