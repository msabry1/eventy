package com.eventy.service.ticket;

import com.eventy.dto.response.TicketDTO;
import com.eventy.entity.Ticket;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class TicketMapper {

    public TicketDTO toDto(Ticket ticket) {
        if (ticket == null) {
            return null;
        }

        TicketDTO dto = new TicketDTO();

        if (ticket.getEvent() != null) {
            dto.setEventName(ticket.getEvent().getName());
            dto.setEventDate(ticket.getEvent().getDate());
            dto.setAddress(ticket.getEvent().getAddress());
        }

        if (ticket.getEvent() != null && ticket.getEvent().getUser() != null) {
            dto.setCreator(ticket.getEvent().getUser().getName());
        }

        dto.setTransactionId(ticket.getTransactionId());
        dto.setId(ticket.getId());
        return dto;
    }

    public List<TicketDTO> toDtoList(List<Ticket> tickets){
        List<TicketDTO> dtoS = new ArrayList<>();
        for( Ticket ticket : tickets ){
            TicketDTO ticketDto = toDto(ticket);
            dtoS.add(ticketDto);
        }
        return dtoS ;
    }

}