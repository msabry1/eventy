package com.eventy.entity;

import jakarta.persistence.*;

import lombok.Data;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String location;
    private Double latitude;
    private Double longitude;
}