package com.eventy.service.stripe;

import com.eventy.entity.Event;
import com.eventy.entity.User;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentLink;
import com.stripe.model.Price;
import com.stripe.param.PaymentLinkCreateParams;
import com.stripe.param.PriceCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class StripeLinkGeneratorService {

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    public PaymentLink createPaymentLink(User currentUser, Event event) throws StripeException {
        Long priceByCent = Math.round(event.getPrice() * 100);
        PaymentLinkCreateParams params = PaymentLinkCreateParams.builder()
                .addLineItem(PaymentLinkCreateParams.LineItem.builder()
                        .setPrice(createPrice(priceByCent))
                        .setQuantity(1L)
                        .build())
                .putMetadata("userId", currentUser.getId().toString())
                .putMetadata("eventId", event.getId().toString())
                .build();

        return PaymentLink.create(params);
    }

    private String createPrice(Long ticketPrice) throws StripeException {

        PriceCreateParams priceParams = PriceCreateParams.builder()
                .setCurrency("usd")
                .setUnitAmount(ticketPrice)
                .setProductData(
                        PriceCreateParams.ProductData.builder()
                                .setName("Ticket")
                                .build()
                )
                .build();

        return Price.create(priceParams).getId();
    }
}