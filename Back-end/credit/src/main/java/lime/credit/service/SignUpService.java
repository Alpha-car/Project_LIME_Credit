package lime.credit.service;

import lime.credit.repository.SignUpRepository;
import lime.credit.service.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignUpService {

    private final SignUpRepository signUpRepository;

    public boolean signUp(User user) {
        if (!user.isValidRequest()) return false;
        signUpRepository.save(user);
        return true;
    }
}
