package com.eventy.dto.request;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TicketCreateDTO {
    public Long eventId;
    public Long userId;
    String transactionId;
    String paymentStatus;
}
