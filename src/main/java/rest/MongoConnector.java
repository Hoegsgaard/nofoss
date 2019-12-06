package rest;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoConnector {
    // static variable single_instance of type Singleton
    private static MongoConnector single_instance = null;
    // variable of type String
    private String username = System.getenv("DEVOPSMONGOUSER");
    private String password = System.getenv("DEVOPSMONGOPASS");
    private MongoClient mongoClient;
    private MongoDatabase mongoDatabase;

    // private constructor restricted to this class itself
    private MongoConnector(String database) {
        mongoClient = MongoClients.create("mongodb+srv://" + username + ":" + password + "@nofoss-d02td.mongodb.net/test?retryWrites=true&w=majority");
        mongoDatabase = mongoClient.getDatabase(database);
    }

    // static method to create instance of Singleton class
    public static MongoConnector getInstance(String database) {
        if (single_instance == null)
            single_instance = new MongoConnector(database);

        return single_instance;
    }

    public MongoDatabase getDb() {
        return mongoDatabase;
    }
}
