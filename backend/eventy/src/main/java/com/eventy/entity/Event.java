package com.eventy.entity;

import com.eventy.enums.EventCategory;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private byte[] photo;
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private EventCategory category;

    private Double price;
    private Date date;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User user;

    private String address;

    @Column(name = "comments")
    private Long commentsCnt ;

    @Column(name = "likes")
    private Long likesCnt ;


    @OneToMany(mappedBy = "event",cascade = CascadeType.ALL)
    private Set<Comment> comments = new HashSet<>();


    @OneToMany(mappedBy = "event",cascade = CascadeType.ALL)
    private Set<Like> likes = new HashSet<>();;
}
