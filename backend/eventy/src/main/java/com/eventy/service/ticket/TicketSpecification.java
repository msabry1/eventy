package com.eventy.service.ticket;

import com.eventy.entity.Ticket;
import org.springframework.data.jpa.domain.Specification;

public class TicketSpecification {

    public static Specification<Ticket> hasUserId(Long userId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("user").get("id"), userId);
    }
}
