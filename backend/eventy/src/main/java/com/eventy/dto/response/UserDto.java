package com.eventy.dto.response;

import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class UserDto {

    @Lob
    private byte[] photo;
    private Long Userid;
    private String name;
    private String bio;
    private Long ticketsCnt;
    private Long followersCnt;
    private Long followingCnt;
}
