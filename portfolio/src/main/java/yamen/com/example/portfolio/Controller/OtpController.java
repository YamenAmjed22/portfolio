package yamen.com.example.portfolio.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yamen.com.example.portfolio.DTO.OtpRequest;
import yamen.com.example.portfolio.Service.OtpService;
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class OtpController {

        @Autowired
        private OtpService otpService;


        @PostMapping("/checkotp")
        public ResponseEntity<?> checkOtp(@RequestBody OtpRequest otpRequest) {

            boolean isValid = otpService.checkOTP(otpRequest.getEmail(), otpRequest.getOtp());
            if (isValid) {
                return ResponseEntity.status(HttpStatus.CREATED).body("\"Valid OTP\"");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("\"Invalid OTP\"");

        }


}