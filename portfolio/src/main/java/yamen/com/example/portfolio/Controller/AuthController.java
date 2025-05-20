package yamen.com.example.portfolio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import yamen.com.example.portfolio.DTO.OtpRequest;
import yamen.com.example.portfolio.Entitys.User;
import yamen.com.example.portfolio.Repos.UserRepo;
import yamen.com.example.portfolio.Service.AdminCheckService;
import yamen.com.example.portfolio.Service.AuthService;
import yamen.com.example.portfolio.Service.JwtService;
import yamen.com.example.portfolio.Service.RegistrationService;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private AdminCheckService adminCheckService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User request) {
        Optional<User> email = userRepo.findByUserName(request.getUsername());
        boolean authenticated = authService.authenticate(request.getUsername(), request.getPassword(), request.getIsValid());

        if (authenticated) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
            String token = jwtService.generateToken((User) userDetails);
            return ResponseEntity.ok().body(Map.of("token", token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/check-admin")
    public ResponseEntity<?> isAdmin(@RequestHeader("Authorization") String token) {
        boolean isAdmin = adminCheckService.isAdmin(token);
        return ResponseEntity.ok(Map.of("isAdmin", isAdmin));
    }
}