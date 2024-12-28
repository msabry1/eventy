package com.eventy.controller;

import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping("/profile")
    public User profile(@CurrentUser User user) {

        return user;
    }
}
