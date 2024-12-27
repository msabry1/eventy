package com.eventy.service.stripe;

import com.eventy.exceptions.PaymentSigntureException;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class StripeWebhookService {

    @Value("${stripe.webhook.secret}")
    private String endpointSecret;

    public Map<String,String> handleSigntureAndGetTransctionData(String payload, String sigHeader)  {
        Event event;
        try {
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (SignatureVerificationException e) {
            throw new PaymentSigntureException("Webhook signature verification failed");
        }
        return handleStripeEventData(event);
    }

    public Map<String,String> handleStripeEventData(Event event)  {
        if ("checkout.session.completed".equals(event.getType())) {
            return handleStripeSessionCompletedEvent(event);
        }
        throw new RuntimeException("Event type not supported");
    }

    public Map<String,String> handleStripeSessionCompletedEvent(Event event)  {
        String eventJson = event.getData().toJson() ;

        return StripeJsonParser.extractMetadataAndStatus(eventJson);
    }
}

