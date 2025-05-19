package yamen.com.example.portfolio.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yamen.com.example.portfolio.Entitys.ContactUs;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ContactUsRepo extends JpaRepository<ContactUs, Long> {
    ContactUs findByEmail(String email);

    Optional<ContactUs> findById(UUID id);
}
