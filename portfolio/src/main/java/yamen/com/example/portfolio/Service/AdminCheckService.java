package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("AdminService")
public class AdminCheckService {

    @Autowired
    private  JwtService jwtService;



    public boolean isAdmin(String token) {
        if (token.startsWith("Bearer ")) {
            token
                    = token.substring(7);
        }
        String role = jwtService.extractRole(token);
        return "ROLE_ADMIN".equalsIgnoreCase(role);
    }
}
