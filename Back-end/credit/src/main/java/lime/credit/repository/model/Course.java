package lime.credit.repository.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Course {
    @Id
    @GeneratedValue
    @Column(name = "course_id")
    private Long id;
    private String name;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
