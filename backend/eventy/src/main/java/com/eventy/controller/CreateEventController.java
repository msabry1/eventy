package com.eventy.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventy.dto.response.EventDto;
import com.eventy.entity.Event;
import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import com.eventy.service.CreateEventService;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173")
public class CreateEventController {
    private final CreateEventService createEventService;

    public CreateEventController(CreateEventService createEventService) {
        this.createEventService = createEventService;
    }

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@CurrentUser User user, @RequestBody EventDto event) {
        try {
            Event createdEvent = createEventService.createEvent(user, event);
            return ResponseEntity.ok(createdEvent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}