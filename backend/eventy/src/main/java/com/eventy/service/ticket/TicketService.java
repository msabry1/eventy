package com.eventy.service.ticket;


import com.eventy.dto.request.TicketCreateDTO;
import com.eventy.dto.response.TicketDTO;
import com.eventy.entity.Event;
import com.eventy.entity.Ticket;
import com.eventy.entity.User;
import com.eventy.repository.EventRepository;
import com.eventy.repository.TicketRepository;
import com.eventy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;
@Service
public class TicketService {

    TicketRepository ticketRepository;
    EventRepository eventRepository;
    UserRepository userRepository;
    TicketMapper ticketMapper;

    @Autowired
    public TicketService(TicketRepository ticketRepository, EventRepository eventRepository,
                         UserRepository userRepository, TicketMapper ticketMapper) {
        this.ticketRepository = ticketRepository;
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.ticketMapper = ticketMapper;
    }

    public void addTicket(TicketCreateDTO ticketCreateDTO) {
        User user = userRepository.findById(ticketCreateDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Event event = eventRepository.findById(ticketCreateDTO.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));

        user.setTicketsCnt(user.getTicketsCnt() + 1);
        Ticket ticket = Ticket.builder()
                .event(event)
                .user(user)
                .transactionId(ticketCreateDTO.getTransactionId())
                .build();
        userRepository.save(user);
        ticketRepository.save(ticket);
    }

    public TicketDTO getTicketById(Long id){
        Optional<Ticket> ticket = ticketRepository.findById(id);
        return ticketMapper.toDto(ticket.orElse(null));
    }

    public List<TicketDTO> getTicketsByUserId(User user) {
        List<Ticket> tickets = ticketRepository.findAll(TicketSpecification.hasUserId(user.getId()));
        return ticketMapper.toDtoList(tickets);
    }

    public void deleteTicketById(Long id, User user){
        ticketRepository.deleteById(id);
        user.setTicketsCnt(user.getTicketsCnt() - 1);
    }
}
