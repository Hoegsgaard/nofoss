import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;

public class MongoConnector {
    // static variable single_instance of type Singleton
    private static MongoConnector single_instance = null;
    // variable of type String
    public String s;
    private String username = System.getenv("DEVOPSMONGOUSER");
    private String password = System.getenv("DEVOPSMONGOPASS");
    private MongoClient mongoClient;

    // private constructor restricted to this class itself
    private MongoConnector() {
        mongoClient = MongoClients.create("mongodb+srv://" + username + ":" + password + "@nofoss-d02td.mongodb.net/test?retryWrites=true&w=majority");
    }

    // static method to create instance of Singleton class
    public static MongoConnector getInstance() {
        if (single_instance == null)
            single_instance = new MongoConnector();

        return single_instance;
    }

    public MongoClient getDb() {
        return mongoClient;
    }
}
