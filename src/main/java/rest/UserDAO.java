package rest;

import data.Vehicle;
import data.User;
import exception.NoImplementationException;

import java.util.List;

public interface UserDAO {

    //GET
    String getUser() throws NoImplementationException;

    //POST
    void addUser(String user);

    //DELETE
    void deleteUser(String user);

    String loginUser(String user);




}
