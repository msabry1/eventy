package com.eventy.entity;

import com.eventy.enums.VoteType;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Data
@Entity
@Table(name = "like_record")
@Builder
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private VoteType type;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

}
