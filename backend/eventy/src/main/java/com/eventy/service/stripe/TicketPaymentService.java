package com.eventy.service.stripe;


import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class TicketPaymentService {
    public void payTicket(Map<String,String> transactionData) {
        System.out.println(transactionData);
        if (!"paid".equals(transactionData.get("status"))) {
            System.out.println("Ticket payment is successful");
        }
        else{
            System.out.println("Ticket payment is not successful");
        }

    }
}
