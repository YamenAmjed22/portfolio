package yamen.com.example.portfolio.Config;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//http://localhost:8080/swagger-ui/index.html
@Configuration
public class swagger {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Portfolio APIs")
                        .description("I used swagger UI-API to show my APIs ")
                        .version("v1.0.0")
                        .contact(new Contact().name("Yamen Amjed Rasmi Mustafa ").email("yamenamjed23@gmail.com"))
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Project Documentation For Portfolio Apis ")
                        .url("https://your-project-docs.com"));
    }
}
