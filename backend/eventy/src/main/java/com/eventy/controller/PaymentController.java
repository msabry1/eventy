package com.eventy.controller;

import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import com.eventy.stripe.PaymentLinkResponse;
import com.eventy.stripe.StripeService;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Event;
import com.stripe.model.PaymentIntent;
import com.stripe.model.PaymentLink;
import com.stripe.net.Webhook;
import com.stripe.param.ChargeRetrieveParams;
import com.stripe.param.PaymentIntentRetrieveParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/create")
    public ResponseEntity<PaymentLinkResponse> createPaymentIntent() {
        try {
            PaymentLink paymentLink = stripeService.createPaymentLink();
            PaymentLinkResponse response = new PaymentLinkResponse(paymentLink.getUrl());
            return ResponseEntity.ok(response);
        } catch (StripeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(@RequestBody String payload, @RequestHeader("Stripe-Signature") String sigHeader) {
        try {
            // Replace webhookSecret with your Stripe webhook secret
            String webhookSecret = "whsec_DO1pl7lEzn4DbpwrLRQHCOBLFKAevJWM";
            Event event = Webhook.constructEvent(payload, sigHeader, webhookSecret);

            // Handle the event
            switch (event.getType()) {
                case "payment_intent.succeeded":
                    PaymentIntent paymentIntent = (PaymentIntent) event.getData().getObject();
                    ChargeRetrieveParams params = ChargeRetrieveParams.builder()
                            .addExpand("payment_intent")
                            .addExpand("invoice.lines.data.price.product")
                            .build();
                    Charge charge = Charge.retrieve(paymentIntent.getLatestCharge(), params, null);

                    // Get product name from the charge description or another available field
                    String description = charge.getDescription();
                    // You might need to look at other charge fields to find where the product info is stored

                    System.out.println("Charge details:");
                    System.out.println(charge.toJson());

                    // Parse the product name to get user and product IDs
                    System.out.println(paymentIntent);
                    break;
                case "payment_intent.payment_failed":
                    paymentIntent = (PaymentIntent) event.getData().getObject();
                    // Handle failed payment
                    break;
                default:
                    // Handle other event types
                    break;
            }

            return ResponseEntity.ok().body("Webhook processed successfully");
        } catch (SignatureVerificationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid signature");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Webhook processing failed");
        }
    }
}