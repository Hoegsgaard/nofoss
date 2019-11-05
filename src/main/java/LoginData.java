import lombok.Data;
import lombok.NoArgsConstructor;
    @Data
    @NoArgsConstructor
    public class LoginData {
        private String username;
        private String password;

        public String getUsername(){
            return this.username;
        }
    }
