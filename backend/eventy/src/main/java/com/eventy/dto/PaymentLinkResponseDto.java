package com.eventy.dto;

import lombok.Data;

@Data
public class PaymentLinkResponseDto {
    private String paymentLink;

    public PaymentLinkResponseDto(String paymentLink) {
        this.paymentLink = paymentLink;
    }
}
