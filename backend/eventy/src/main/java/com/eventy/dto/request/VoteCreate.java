package com.eventy.dto.request;


import com.eventy.enums.VoteType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class VoteCreate {

    @Enumerated(EnumType.STRING)
    private VoteType type;

    @NotNull
    @Pattern(regexp="^(0|[1-9][0-9]*)$", message = "user id must be a number")
    private String userId;
    @NotNull
    @Pattern(regexp = "^(0|[1-9][0-9]*)$", message = "event id must be a number")
    private String eventId;
}
