package com.eventy.service.stripe;


import com.eventy.dto.request.TicketCreateDTO;
import com.eventy.service.ticket.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketTransactionService {
    private final TicketService ticketService;


    @Autowired
    public TicketTransactionService(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    public void payTicket(TicketCreateDTO ticketCreateDTO) {
        System.out.println(ticketCreateDTO);
        if ("paid".equals(ticketCreateDTO.getPaymentStatus())) {
            ticketService.addTicket(ticketCreateDTO);
        }
        else{
            System.out.println("Ticket payment is not successful");
        }

    }
}
