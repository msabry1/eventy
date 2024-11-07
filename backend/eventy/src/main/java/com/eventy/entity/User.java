package com.eventy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;
    private String bio;

    @Lob
    private byte[] photo;

    @Column(name = "followers_count")
    private Long followersCnt ;

    @Column(name = "following_count")
    private Long followingCnt ;

    @Column(name = "tickets")
    private Long ticketsCnt;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_following",
            joinColumns = @JoinColumn(name = "follower_id"),
            inverseJoinColumns = @JoinColumn(name = "following_id")
    )
    private Set<User> following = new HashSet<>(); ;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Ticket> tickets = new HashSet<>();
}
