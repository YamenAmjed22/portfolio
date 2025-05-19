package yamen.com.example.portfolio.Entitys;

import org.hibernate.annotations.GenericGenerator;
import java.util.UUID;

import jakarta.persistence.*;

/**
 * The ContactUs class is an entity class that is reflected to the table CONTACT_US
 * the id represents the primary key in the same table.
 *
 * @author Yamen Amjed
 * @version 1.0
 */

@Entity
@Table(name="contact_us")
public class ContactUs {

    @Id
    @GeneratedValue(generator = "UUIDWay")
    @GenericGenerator(name = "UUIDWay", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(name="Full-Name", nullable = false)
    private String fullName;

    @Column(name = "Email", nullable = false)
    private String email;

    @Column(name = "Message", nullable = false)
    private String message;


    public ContactUs(String fullName, String email, String message) {
        this.fullName = fullName;
        this.email = email;
        this.message = message;
    }
    public ContactUs() {

    }

    // getter and setter
    public UUID getId() {
        return id;
    }

    /**
     * this is a setter method for the id
     * @param id
     */
    public void setId(UUID id) {
        this.id = id;
    }

    // todo: review this implementation
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    /**
     *
     * @return a String that represents the email
     */
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
