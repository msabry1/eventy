package com.eventy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.eventy.entity.Event;
import com.eventy.repository.EventRepository;

@Service
public class FeedService {
    private final EventRepository eventRepository;

    public FeedService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getRecentEvents() {
        return eventRepository.findRecentEvents();
    }

    public Optional<Event> getEventById(Long eventId) {
        return eventRepository.findById(eventId);
    }
    
}
