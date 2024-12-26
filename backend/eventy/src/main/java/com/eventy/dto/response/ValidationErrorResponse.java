package com.eventy.dto.response;

import lombok.Data;

import java.util.List;

@Data
public class ValidationErrorResponse {
    private List<String> errorMessages;

    public ValidationErrorResponse(List<String> errorMessages) {
        this.errorMessages = errorMessages;
    }
}
