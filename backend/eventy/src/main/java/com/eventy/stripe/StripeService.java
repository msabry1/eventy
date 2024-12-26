package com.eventy.stripe;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.PaymentLink;
import com.stripe.model.Price;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.PaymentLinkCreateParams;
import com.stripe.param.PriceCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
public class StripeService {
    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    public PaymentLink createPaymentLink() throws StripeException {
        String userId = "2";
        String productId = "10";

        PaymentLinkCreateParams params = PaymentLinkCreateParams.builder()
                .addLineItem(PaymentLinkCreateParams.LineItem.builder()
                        .setPrice(createPrice(userId, productId))
                        .setQuantity(1L)
                        .build())
                .build();

        return PaymentLink.create(params);
    }

    private String createPrice(String userId, String productId) throws StripeException {
        String structuredName = String.format("Payment_USER%s_PROD%s", userId, productId);

        PriceCreateParams priceParams = PriceCreateParams.builder()
                .setCurrency("usd")
                .setUnitAmount(1000L)
                .setProductData(PriceCreateParams.ProductData.builder()
                        .setName(structuredName)  // Store info in product name
                        .build())
                .build();

        return Price.create(priceParams).getId();
    }
}