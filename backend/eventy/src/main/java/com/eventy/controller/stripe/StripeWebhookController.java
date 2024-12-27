package com.eventy.controller.stripe;

import com.eventy.dto.request.TicketCreateDTO;
import com.eventy.service.stripe.StripeWebhookService;
import com.eventy.service.stripe.TicketTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class StripeWebhookController {

    StripeWebhookService stripeWebhookService;
    TicketTransactionService ticketTransactionService;

    @Autowired
    public StripeWebhookController(StripeWebhookService stripeWebhookService,
                                    TicketTransactionService ticketTransactionService) {
        this.stripeWebhookService = stripeWebhookService;
        this.ticketTransactionService = ticketTransactionService;
    }

    @PostMapping("/webhook")
    public String handleStripeEvent(@RequestBody String payload,
                                    @RequestHeader("Stripe-Signature") String sigHeader) {

        TicketCreateDTO transactionData = stripeWebhookService
                .handleSigntureAndGetTransctionData(payload, sigHeader);

        ticketTransactionService.payTicket(transactionData);
        return "Event processed";
    }
}