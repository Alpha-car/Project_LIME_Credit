package lime.credit.repository.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Student extends User {
    @OneToMany
    @JoinColumn(name = "course_id")
    private List<Course> courses;
    private int grade;
    private double totalCredit;
}
