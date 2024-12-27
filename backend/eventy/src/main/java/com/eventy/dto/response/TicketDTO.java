package com.eventy.dto.response;

import lombok.Data;

import java.util.Date;

@Data
public class TicketDTO {

    private Long id;
    private String eventName;
    private Date eventDate;
    private String creator;
    private String address;
    private String transactionId;
}
