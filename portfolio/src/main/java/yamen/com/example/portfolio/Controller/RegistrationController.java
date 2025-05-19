package yamen.com.example.portfolio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;
import yamen.com.example.portfolio.Entitys.User;
import yamen.com.example.portfolio.Service.AuthService;
import yamen.com.example.portfolio.Service.RegistrationService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody User registeredUser) {
            User savedUser = registrationService.registerUser(registeredUser);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }



}
