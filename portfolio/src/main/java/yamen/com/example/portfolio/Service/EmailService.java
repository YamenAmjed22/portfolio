package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import yamen.com.example.portfolio.Entitys.ContactUs;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(ContactUs contactUs){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(contactUs.getEmail());
        message.setSubject("Thank You For Contact To Me ");
        message.setText("Dear " + contactUs.getFullName() + ",\n\n" +
                "Thank you for your message:\n\"" + contactUs.getMessage() + "\"\n\n" +
                "We will get back to you soon.\n\nBest regards,\nYamen's Portfolio");
        mailSender.send(message);
    }
}
