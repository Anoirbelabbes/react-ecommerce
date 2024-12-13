package cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow all origins temporarily or restrict to trusted ones
        registry.addMapping("/**")
                .allowedOrigins("*")  // Temporarily allow all origins (including Postman)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Add OPTIONS method
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(false);  // Disable credentials for public APIs
    }
}
