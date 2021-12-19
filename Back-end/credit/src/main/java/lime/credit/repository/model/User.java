package lime.credit.repository.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Getter
@ToString
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;
    private String email;
    private String password;
    private String name;
    private String highSchool;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public boolean isValidRequest() {
        if (email == null || email.length() < 2 || email.length() > 10)
            return false;

        if (password == null || password.length() < 2 || password.length() > 10)
            return false;

        return true;
    }
}
