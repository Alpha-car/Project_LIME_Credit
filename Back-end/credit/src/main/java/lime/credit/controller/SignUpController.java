package lime.credit.controller;

import lime.credit.controller.model.SignUpRequestModel;
import lime.credit.service.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SignUpController {

    private final SignUpService signUpService;

    @PostMapping("/sign-up")
    public boolean signUp(@RequestBody SignUpRequestModel signUpRequestModel) {
        return signUpService.signUp(signUpRequestModel.toUser());
    }
}
