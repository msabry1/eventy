package com.eventy.service.stripe;

import com.eventy.dto.request.TicketCreateDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class StripeJsonParser {
    public static TicketCreateDTO extractMetadataAndStatus(String jsonString) {
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
        metadataAndStatus.put("transactionId", stripeJsonData.path("id").asText());

        return new TicketCreateDTO(
                Long.parseLong(metadataAndStatus.get("eventId")),
                Long.parseLong(metadataAndStatus.get("userId")),
                metadataAndStatus.get("transactionId"),
                metadataAndStatus.get("paymentStatus")
        );
    }
}