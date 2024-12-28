package com.eventy.service;

import com.eventy.dto.request.LoginRequest;
import com.eventy.dto.request.UserCreate;
import com.eventy.dto.response.LoginTokenResponse;
import com.eventy.entity.User;
import com.eventy.exceptions.UserAlreadyExistsException;
import com.eventy.repository.UserRepository;
import com.eventy.security.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public LoginTokenResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        String jwtToken = jwtUtil.generateToken(user.getEmail());
        return new LoginTokenResponse(jwtToken);
    }

    public LoginTokenResponse register(UserCreate userDto) {
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new UserAlreadyExistsException("User already exists");
        }
        User user = User.builder()
                .email(userDto.getEmail())
                .name(userDto.getUsername())
                .bio(userDto.getBio())
                .photo(userDto.getPhoto())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .ticketsCnt(0L)
                .build();
        userRepository.save(user);

        String jwtToken = jwtUtil.generateToken(user.getEmail());
        return new LoginTokenResponse(jwtToken);
    }
}
