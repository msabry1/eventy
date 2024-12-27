package com.eventy.service.stripe;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class StripeJsonParser {
    public static Map<String, String> extractMetadataAndStatus(String jsonString) {
        Map<String, String> metadataAndStatus = new HashMap<>();
        JsonNode jsonNode = null;
        ObjectMapper mapper = new ObjectMapper();

        try {
            jsonNode = mapper.readTree(jsonString);
        } catch (Exception e) {
            throw new RuntimeException("Error parsing JSON", e);
        }

        JsonNode stripeJsonData = jsonNode.path("object");
        metadataAndStatus.put("userId", stripeJsonData.path("metadata").path("userId").asText());
        metadataAndStatus.put("eventId", stripeJsonData.path("metadata").path("eventId").asText());
        metadataAndStatus.put("paymentStatus", stripeJsonData.path("payment_status").asText());

        return metadataAndStatus;
    }
}