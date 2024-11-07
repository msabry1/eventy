package com.eventy.dto.request;

import com.eventy.dto.AddressDto;
import com.eventy.enums.EventCategory;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.Date;

@Data
public class EventCreate {

    private byte[] photo;

    @NotNull
    @Size(min = 3, max = 30, message = "event name must be between 3 and 30 charachters")
    private String name;

    @Size(max=10000, message = "description can't be greater than 10000 charchter" )
    private String description;

    @Enumerated(EnumType.STRING)
    private EventCategory category;

    @NotNull
    @Pattern(regexp="^(0|[1-9][0-9]*)$", message = "price id must be a number")
    private String price;

    @FutureOrPresent(message = "can't set event in the past")
    private Date date;

    @NotNull
    @Pattern(regexp = "^(0|[1-9][0-9]*)$", message = "creator id must be a number")
    private String creatorId;

    @NotNull
    @Valid
    AddressDto address;

}
