package lime.credit.repository;

import lime.credit.repository.model.User;
import org.springframework.data.repository.CrudRepository;

public interface SignUpRepository extends CrudRepository<User, Long> {
}
