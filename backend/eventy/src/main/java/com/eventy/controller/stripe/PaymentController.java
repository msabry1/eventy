package com.eventy.controller.stripe;

import com.eventy.entity.Event;
import com.eventy.entity.User;
import com.eventy.repository.EventRepository;
import com.eventy.security.user.CurrentUser;
import com.eventy.dto.PaymentLinkResponseDto;
import com.eventy.service.stripe.StripeLinkGeneratorService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentLink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private StripeLinkGeneratorService stripeLinkGeneratorService;
    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/create/{eventId}")
    public ResponseEntity<PaymentLinkResponseDto> createPaymentIntent(@PathVariable String eventId, @CurrentUser User currentUser) {
//        Event event = eventRepository
//                .findById(Long.parseLong(eventId))
//                .orElseThrow(() -> new RuntimeException("Event not found")
//                );
        Event event = new Event();
        event.setId(Long.parseLong(eventId));
        event.setPrice(15.0);

        try {
            PaymentLink paymentLink = stripeLinkGeneratorService.createPaymentLink(currentUser,event);
            PaymentLinkResponseDto response = new PaymentLinkResponseDto(paymentLink.getUrl());
            return ResponseEntity.ok(response);
        } catch (StripeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}