package SecurityConfig;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {

    @Autowired
    private CustomUserDetailsService customUserDetailsService; // Inject UserDetailsService
    private static final long JWT_EXPIRATION_MS = 86400000; // 24 hours

    public String generateToken(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject(userDetails.getUsername()) // Username as subject
                .setIssuedAt(new Date()) // Token issue time
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS)) // Token expiration
                .signWith(SignatureAlgorithm.HS256, JwtConstant.SECRET_KEY) // Signing key
                .compact();
    }

    // Extract username from the token
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Check if the token is expired
    public boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }

    // Generate Authentication object from the token
    public Authentication getAuthentication(String token) {
        String username = extractUsername(token);
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

    // Utility to extract claims from the token
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(JwtConstant.SECRET_KEY) // Use the secret key from JwtConstant
                .parseClaimsJws(token)
                .getBody();
    }
}
