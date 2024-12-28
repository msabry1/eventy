package com.eventy.dto.response;

import jakarta.persistence.Lob;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {

    @Lob
    private byte[] photo;
    String email;
    private Long Userid;
    private String name;
    private String bio;
    private Long ticketsCnt;
}
