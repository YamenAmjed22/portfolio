package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import yamen.com.example.portfolio.Entitys.User;
import yamen.com.example.portfolio.Repos.UserRepo;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    public boolean authenticate(String username, String password , boolean isValid ) {
        Optional<User> user = userRepo.findByUserName(username);
        return user.isPresent() && passwordEncoder.matches(password,user.get().getPassword()) && user.get().getIsValid() ;
    }
}
