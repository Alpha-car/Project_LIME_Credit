package lime.credit.controller.model;

import lime.credit.repository.model.User;
import lombok.Data;

@Data
public class SignUpRequestModel {
    private String email;
    private String password;
    private String name;

    public User toUser() {
        return new User(email, password);
    }
}
