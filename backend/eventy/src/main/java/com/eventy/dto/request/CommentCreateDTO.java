package com.eventy.dto.request;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CommentCreateDTO {

    @NotNull
    @Size(max=1000, message = "comment content can't be greater than 1000 charchter" )
    private String content;
    @NotNull
    @Pattern(regexp = "^(0|[1-9][0-9]*)$", message = "user id must be a number")
    private String userId;
    @NotNull
    @Pattern(regexp = "^(0|[1-9][0-9]*)$", message = "event id must be a number")
    private String eventId;
}
