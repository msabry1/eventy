package com.eventy.dto.response;

import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class CommentDto {

    private String content;
    private String ownerId;
    private String ownerName;
    @Lob
    private byte[] ownerphoto;
}
