package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import yamen.com.example.portfolio.Entitys.User;
import yamen.com.example.portfolio.Repos.UserRepo;

import java.util.Optional;
import java.util.Random;

@Service
public class RegistrationService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

   private String otp;


    public String generateOTP(){
        Random rand = new Random();
        int otp = 100000 + rand.nextInt(900000); // 100000 to 999999
        return String.valueOf(otp);
    }

    public User registerUser(User newUser) {
        Optional<User> user = userRepo.findByUserName(newUser.getUsername());

        if (newUser.getUsername().length() == 0 && newUser.getEmail().length() == 0) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username and Email can't be empty");
        }

        // Check if user already exists by username
        if (user.isPresent()) {
            if (newUser.getEmail().equals(user.get().getEmail())) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
            } else {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already exists");
            }
        }

        // Continue with registration
        otp = generateOTP();

        newUser.setOtp(otp);
        newUser.setIsValid(false);
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(newUser.getEmail());
        message.setSubject("Thank You For Registration");
        message.setText("Dear " + newUser.getFirstName() + " " + newUser.getLastName() + ",\n\n" +
                "Thank you for registering on my web app:\n\n" +
                "This is your OTP: " + otp + "\n\nBest regards,\nYamen Amjed Rasmi Mustafa");

        mailSender.send(message);

        return userRepo.save(newUser);
    }








}
