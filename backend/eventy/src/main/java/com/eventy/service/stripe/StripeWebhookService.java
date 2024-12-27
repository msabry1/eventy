package com.eventy.service.stripe;

import com.eventy.dto.request.TicketCreateDTO;
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

    public TicketCreateDTO handleSigntureAndGetTransctionData(String payload, String sigHeader)  {
        Event event;
        try {
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (SignatureVerificationException e) {
            throw new PaymentSigntureException("Webhook signature verification failed");
        }
        return handleStripeEventData(event);
    }

    public TicketCreateDTO handleStripeEventData(Event event)  {
        if ("checkout.session.completed".equals(event.getType())) {
            return handleStripeSessionCompletedEvent(event);
        }
        throw new RuntimeException("Event type not supported");
    }

    public TicketCreateDTO handleStripeSessionCompletedEvent(Event event)  {
        String eventJson = event.getData().toJson() ;

        return StripeJsonParser.extractMetadataAndStatus(eventJson);
    }
}

