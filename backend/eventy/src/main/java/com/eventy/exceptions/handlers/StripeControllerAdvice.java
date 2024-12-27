package com.eventy.exceptions.handlers;

import com.eventy.exceptions.PaymentSigntureException;
import com.stripe.exception.SignatureVerificationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class StripeControllerAdvice {
    @ExceptionHandler(PaymentSigntureException.class)
    public String handleUnAuthException(PaymentSigntureException ex) {
        return "Webhook signature verification failed";
    }
}
