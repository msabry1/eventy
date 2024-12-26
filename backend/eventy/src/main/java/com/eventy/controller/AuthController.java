package com.eventy.controller;//package com.eventy.controller;
//
//import com.eventy.dto.request.LoginRequest;
//import com.eventy.dto.request.UserCreate;
//import com.eventy.dto.response.JwtAuthenticationResponse;
//import com.eventy.security.JwtService;
//import com.eventy.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//    @Autowired
//    private AuthenticationManager authenticationManager;
//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    private JwtService tokenProvider;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        loginRequest.getEmail(),
//                        loginRequest.getPassword()
//                )
//        );
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = tokenProvider.generateToken(loginRequest.getEmail());
//
//        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
//    }
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody UserCreate userCreate) {
//        userService.registerUser(userCreate);
//
//        return ResponseEntity.ok("User registered successfully");
//    }
//}


import com.eventy.dto.request.LoginRequest;
import com.eventy.entity.User;
import com.eventy.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(authService.register(user));
    }


    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.authenticate(loginRequest);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return ResponseEntity.ok(response);
    }
}

