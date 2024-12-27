package com.eventy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginTokenResponse {
    private String token;
}
