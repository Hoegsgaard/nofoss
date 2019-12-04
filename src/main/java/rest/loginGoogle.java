package rest;

import data.User;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@Path("loginGoogle")
public class loginGoogle {
    int status;
    @POST
    public int googleLogin(String accessToken){
        try {
            //System.out.println(accessToken);
            URL url = new URL("https://www.googleapis.com/oauth2/v3/tokeninfo?access_token="+ accessToken);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            //con.setRequestMethod("GET");
            status = con.getResponseCode();
            //System.out.println(status);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return status;
    }

    @POST
    @Path("/getToken")
    public String generateToken(String email){
        return JWTHandler.generateJwtToken(new User(email, ""/*new ObjectId("5dc0ad700000000000000000")*/));
    }
}
