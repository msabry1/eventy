package com.eventy.dto.response;

import com.eventy.entity.Address;
import com.eventy.enums.EventCategory;
import lombok.Data;

import java.util.Date;

@Data
public class EventDto {

    private byte[] photo;
    private String name;
    private String description;
    private EventCategory category;
    private Double price;
    private Date date;
    private byte[] creatorPhoto;
    private String creatorName;
    private Long creatorId;
    private Address address;
    private Long votes;
    private Long commentsCnt;
}
