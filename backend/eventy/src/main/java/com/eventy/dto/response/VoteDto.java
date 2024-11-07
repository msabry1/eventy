package com.eventy.dto.response;

import com.eventy.enums.VoteType;
import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class VoteDto {

    private VoteType type ;
    private String ownerId;
    private String ownerName;
    @Lob
    private byte[] ownerphoto;
}
