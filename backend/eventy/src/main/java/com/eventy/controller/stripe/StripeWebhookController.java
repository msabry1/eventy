package com.eventy.controller.stripe;

import com.eventy.service.stripe.StripeWebhookService;
import com.eventy.service.stripe.TicketPaymentService;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.*;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class StripeWebhookController {

    StripeWebhookService stripeWebhookService;
    TicketPaymentService ticketPaymentService;

    @Autowired
    public StripeWebhookController(StripeWebhookService stripeWebhookService,
                                    TicketPaymentService ticketPaymentService) {
        this.stripeWebhookService = stripeWebhookService;
        this.ticketPaymentService = ticketPaymentService;
    }

    @PostMapping("/webhook")
    public String handleStripeEvent(@RequestBody String payload,
                                    @RequestHeader("Stripe-Signature") String sigHeader) {

        Map<String,String> transactionData = stripeWebhookService
                .handleSigntureAndGetTransctionData(payload, sigHeader);

        ticketPaymentService.payTicket(transactionData);
        return "Event processed";
    }
}