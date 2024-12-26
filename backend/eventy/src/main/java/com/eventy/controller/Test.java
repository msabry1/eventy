package com.eventy.controller;


import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {
    @PostMapping("/test")
    public User test(@CurrentUser User user) {
        return user;
    }
}
