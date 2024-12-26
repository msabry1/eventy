package com.eventy.repository;

import com.eventy.entity.Event;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    // Query to get the most recent 100 events by date
    @Query("SELECT e FROM Event e ORDER BY e.date DESC")
    List<Event> findRecentEvents();
}