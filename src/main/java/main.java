import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;
import java.io.File;

public class main{
    public static void main(String[] arc){
        Tomcat tomcat = new Tomcat();
        tomcat.setBaseDir("temp");
        String port = System.getenv("PORT"); //Til Heroku
        if(port == null){
            port = "8080";
        }

        tomcat.setPort(Integer.parseInt(port));
        tomcat.getConnector();

        tomcat.addWebapp("/", new File("src/main/webapp").getAbsolutePath());

        try{
            tomcat.start();
        } catch(LifecycleException e){
            e.printStackTrace();
        }

        tomcat.getServer().await();
    }
    private String text = "Hello JSON-world";

    //Names MUST match property name for serialization to work!
    public String getText() {
        return text;
    }

    //Names MUST match property name for serialization to work!
    public void setText(String text) {
        this.text = text;
    }
}
// :)
