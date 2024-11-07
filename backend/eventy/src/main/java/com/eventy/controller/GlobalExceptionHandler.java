package com.eventy.controller;

import com.eventy.dto.response.ValidationErrorResponse;
import jakarta.validation.UnexpectedTypeException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;


@ControllerAdvice
public class GlobalExceptionHandler {

    // handling validation errors
    @ExceptionHandler({MethodArgumentNotValidException.class, UnexpectedTypeException.class } )
    public ResponseEntity<ValidationErrorResponse> handleValidationException(MethodArgumentNotValidException ex) {
        List<String> errorMessages = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());
        ValidationErrorResponse validationErrorResponse = new ValidationErrorResponse(errorMessages);
        return new ResponseEntity<>(validationErrorResponse, HttpStatus.BAD_REQUEST) ;
    }
}
