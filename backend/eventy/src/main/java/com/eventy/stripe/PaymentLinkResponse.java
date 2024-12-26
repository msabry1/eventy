package com.eventy.stripe;

public class PaymentLinkResponse {
    private String paymentLink;

    public PaymentLinkResponse(String paymentLink) {
        this.paymentLink = paymentLink;
    }

    public String getPaymentLink() { return paymentLink; }
    public void setPaymentLink(String paymentLink) { this.paymentLink = paymentLink; }
}
