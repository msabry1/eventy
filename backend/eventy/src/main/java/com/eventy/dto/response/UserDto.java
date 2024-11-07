package com.eventy.dto.response;

import lombok.Data;

@Data
public class UserDto {

    private byte[] photo;
    private String name;
    private String bio;
    private Long ticketsCnt;
    private Long followersCnt;
    private Long followingCnt;
}
