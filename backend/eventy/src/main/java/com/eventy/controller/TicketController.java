package com.eventy.controller;


import com.eventy.dto.request.TicketCreateDTO;
import com.eventy.dto.response.TicketDTO;
import com.eventy.entity.Ticket;
import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import com.eventy.service.ticket.TicketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {

    TicketService ticketService;

    public TicketController(TicketService ticketService){
        this.ticketService = ticketService;
    }

    @PostMapping("tickets")
    public ResponseEntity<TicketCreateDTO> createTicket(@RequestBody TicketCreateDTO ticketDto, @CurrentUser User user){
        ticketService.addTicket(ticketDto, user);
        return ResponseEntity.ok(ticketDto);
    }

    @GetMapping("tickets")
    public ResponseEntity<List<TicketDTO>> getTickets(@CurrentUser User user){
        List<TicketDTO> tickets = ticketService.getTicketsByUserId(user);
        return ResponseEntity.ok(tickets);
    }

    @DeleteMapping("tickets/{id}")
    public ResponseEntity<Void> deleteTicketById(@PathVariable Long id, @CurrentUser User user){
        ticketService.deleteTicketById(id, user);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("tickets/{id}")
    public ResponseEntity<TicketDTO> getTicketById(@PathVariable Long id){
        TicketDTO ticket = ticketService.getTicketById(id);
        return ResponseEntity.ok(ticket);
    }

}
