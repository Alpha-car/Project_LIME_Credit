package lime.credit.repository.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Teacher extends User {
    @OneToMany
    @JoinColumn(name = "course_id")
    private List<Course> courses;
}
