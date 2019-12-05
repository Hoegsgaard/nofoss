import data.Vehicle;
import data.User;

import java.util.List;

public interface UserDAO {

    //GET
    String getUser();

    //POST
    void addUser(String user);

    //DELETE
    void deleteUser(String user);




}
