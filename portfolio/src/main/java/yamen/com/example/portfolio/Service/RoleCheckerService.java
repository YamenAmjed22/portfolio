package yamen.com.example.portfolio.Service;

import org.springframework.stereotype.Service;

@Service
public class RoleCheckerService {

    private final JwtService jwtService;

    public RoleCheckerService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    public boolean isAdmin(String token) {
        // Remove "Bearer " prefix if present
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        String role = jwtService.extractRole(token);
        return "ADMIN".equalsIgnoreCase(role);
    }
}
