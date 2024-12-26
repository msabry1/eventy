package com.eventy.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserCreate {

    @NotNull(message = "user name can't be null")
    @Size(min=2,max=30, message = "user name must be greater than one character and less than 30")
    private String username;

    @NotNull(message = "email can't be null")
    @Email(message = "please provide a valid email")
    @Size(max=254, message = "email must be less than 254 charchters")
    private String email;

    @NotNull(message = "password can't be null")
    @Size(min=8,max=100, message = "password must be between 8 and 100 charachters")
    private String password;
}
