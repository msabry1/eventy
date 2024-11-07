package com.eventy.dto.response;

import com.eventy.entity.Address;
import com.eventy.enums.EventCategory;
import jakarta.persistence.Lob;
import lombok.Data;

import java.util.Date;

@Data
public class EventDto {

    @Lob
    private byte[] photo;
    private Long eventId;
    private String name;
    private String description;
    private EventCategory category;
    private Double price;
    private Date date;
    @Lob
    private byte[] creatorPhoto;
    private String creatorName;
    private Long creatorId;
    private Address address;
    private Long upVotes;
    private Long downVotes;
    private Long commentsCnt;
}
