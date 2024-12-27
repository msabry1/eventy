package com.eventy.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ticket")
public class  Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String transactionId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

