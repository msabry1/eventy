package com.eventy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
    @Column(name = "photo")
    private byte[] photo;


    @Column(name = "tickets")
    private Long ticketsCnt;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Ticket> tickets = new ArrayList<>();
}
