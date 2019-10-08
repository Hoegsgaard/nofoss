import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;

public class MongoConnector {
    private String username = System.getenv("MONGOUSER");
    private String password = System.getenv("MONGOPASS");
    private String dbName = "test";

    public MongoDatabase getDb() {
        MongoClient mongoClient = MongoClients.create("mongodb+srv://nofoss:"+password+"@nofoss-fokpd.mongodb.net/admin?retryWrites=true&w=majority");
        return mongoClient.getDatabase(dbName);
    }

    public static void main(String[] args) {
        MongoDatabase test = new MongoConnector().getDb();
        System.out.println("Connected to " + test.getName());
        MongoCollection<Document> brian = test.getCollection("brian");
        brian.insertOne(new Document("name","Brian").append("hat","ko"));
        ArrayList<Document> into = brian.find().into(new ArrayList<>());
        into.forEach(System.out::println);

        MongoService ms = new MongoService();
    }
}