package com.eventy.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AddressDto {

    @NotNull
    @Size(min = 3, max = 255, message = "location must be between 3 and 255 charachters")
    private String location;
    @NotNull
    @Min(value = -90, message = "latitude must be greater than ")
    @Max(90)
    private Double latitude;
    @NotNull
    @Min(-180)
    @Max(180)
    private Double longitude;
}
