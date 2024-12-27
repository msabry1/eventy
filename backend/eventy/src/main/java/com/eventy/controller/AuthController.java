package com.eventy.controller;//package com.eventy.controller;

import com.eventy.dto.request.LoginRequest;
import com.eventy.dto.request.UserCreate;
import com.eventy.dto.response.LoginTokenResponse;
import com.eventy.entity.User;
import com.eventy.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserCreate userDto) {
        authService.register(userDto);
        return ResponseEntity.ok("User registered successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<LoginTokenResponse> login(@RequestBody LoginRequest loginRequest) {

        return ResponseEntity.ok(
            authService.authenticate(loginRequest)
        );
    }
}

