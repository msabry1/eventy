package com.eventy.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class AddressDto {

    @NotNull
    @Size(min = 3, max = 255, message = "location must be between 3 and 255 charachters")
    private String location;

    @NotNull
    // custom validation required
    private String latitude;

    @NotNull
    // custom validation required
    private String longitude;
}
