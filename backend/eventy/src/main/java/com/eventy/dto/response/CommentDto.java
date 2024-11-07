package com.eventy.dto.response;

import lombok.Data;

@Data
public class CommentDto {

    private String content;
    private String ownerId;
    private String ownerName;
}
