package yamen.com.example.portfolio.Service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import yamen.com.example.portfolio.Entitys.ContactUs;
import yamen.com.example.portfolio.Repos.ContactUsRepo;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepo contactUsRepo;

    public ContactUs saveContactInfo(ContactUs contactUs){
        return contactUsRepo.save(contactUs);
    }

    public List<ContactUs> returnAllContactInfo(){
        return contactUsRepo.findAll();
    }

    public ContactUs returnContactByEmail(String email){
       return contactUsRepo.findByEmail(email);
    }


    public ContactUs deleteById(UUID id) {
        Optional<ContactUs> contactUsOptional = contactUsRepo.findById(id);
        if (contactUsOptional.isPresent()) {
            ContactUs contactUs = contactUsOptional.get();
            contactUsRepo.delete(contactUs); // delete the entity itself
            return contactUs;
        } else {
            throw new EntityNotFoundException("ContactUs with id " + id + " not found.");
        }
    }

    public  ContactUs updateContactInfoById(UUID id,ContactUs updatedContactUs){
        ContactUs contactUss = contactUsRepo.findById(id).get();

        if (updatedContactUs.getFullName() != null){
            contactUss.setFullName(updatedContactUs.getFullName());
        }
        if (updatedContactUs.getEmail() != null){
            contactUss.setEmail(updatedContactUs.getEmail());
        }
        if (updatedContactUs.getMessage() != null){
            contactUss.setMessage(updatedContactUs.getMessage());
        }
        return contactUsRepo.save(contactUss);

    }


}
