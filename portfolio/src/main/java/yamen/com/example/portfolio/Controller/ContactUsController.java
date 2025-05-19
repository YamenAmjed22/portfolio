package yamen.com.example.portfolio.Controller;


import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yamen.com.example.portfolio.Entitys.ContactUs;
import yamen.com.example.portfolio.Repos.ContactUsRepo;
import yamen.com.example.portfolio.Service.ContactUsService;
import yamen.com.example.portfolio.Service.EmailService;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/contactus")
public class ContactUsController {
    @Autowired
    private ContactUsService contactUsService;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<ContactUs> saveContactInfo(@RequestBody ContactUs contactUs){
       ContactUs savedContact = contactUsService.saveContactInfo(contactUs);
       emailService.sendEmail(contactUs);
       return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }


    @GetMapping
    public List<ContactUs> returnAllContactInfo(){
        return contactUsService.returnAllContactInfo();
    }

    @PostMapping("/contact/{email}")
    public ResponseEntity<ContactUs> returnContactByEmail(@PathVariable String email){
        ContactUs contactUs = contactUsService.returnContactByEmail(email);
        return new ResponseEntity<>(contactUs, HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<ContactUs> deleteById(@PathVariable UUID id){
        ContactUs contactUs = contactUsService.deleteById(id);
        return new ResponseEntity<>(contactUs, HttpStatus.ACCEPTED);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<ContactUs> updateContactInfo(@PathVariable UUID id , @RequestBody ContactUs updatedContactUs){
        ContactUs updated = contactUsService.updateContactInfoById(id, updatedContactUs);
        return new ResponseEntity<>(updated, HttpStatus.ACCEPTED);
    }






}
