package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import yamen.com.example.portfolio.Entitys.User;
import yamen.com.example.portfolio.Repos.UserRepo;

import java.util.Optional;

@Service
public class OtpService {

    @Autowired
    private UserRepo userRepo;

    public boolean checkOTP(String enteredEmail,String enteredOTP) {
        if (enteredOTP == null || enteredOTP.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You must enter a valid OTP");
        }

        Optional<User> userOpt = userRepo.findByEmail(enteredEmail);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (enteredOTP.equals(user.getOtp())) {
                user.setIsValid(true);
                user.setOtp(null);
                userRepo.save(user);
                return true;
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid OTP");
            }
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
    }

}
