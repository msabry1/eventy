package com.eventy.service;

import java.util.HashSet;
import com.eventy.entity.User;
import org.springframework.stereotype.Service;
import com.eventy.dto.response.EventDto;
import com.eventy.entity.Event;
import com.eventy.repository.EventRepository;
import com.eventy.repository.UserRepository;


@Service
public class CreateEventService {

    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public CreateEventService(EventRepository eventRepository, UserRepository userRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }

    public Event createEvent(User user, EventDto event) {
        User creator = userRepository.findById(user.getId())
            .orElseThrow(() -> new RuntimeException("User not found"));
    
        Event newEvent = new Event();
        newEvent.setName(event.getName());
        newEvent.setDescription(event.getDescription());
        newEvent.setCategory(event.getCategory());
        newEvent.setPrice(event.getPrice());
        newEvent.setDate(event.getDate());
        newEvent.setPhoto(event.getPhoto());
        newEvent.setUser(creator);
        newEvent.setCommentsCnt(0L);
        newEvent.setLikesCnt(0L);
        newEvent.setComments(new HashSet<>());
        newEvent.setLikes(new HashSet<>());
    
        return eventRepository.save(newEvent);

    }
}