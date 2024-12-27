package com.eventy.service.comment;

import com.eventy.dto.request.CommentCreateDTO;
import com.eventy.dto.response.CommentDto;
import com.eventy.entity.Comment;
import com.eventy.entity.Event;
import com.eventy.entity.User;
import com.eventy.exceptions.UnAuthorizedException;
import com.eventy.repository.CommentRepository;
import com.eventy.repository.EventRepository;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final EventRepository eventRepository;
    private final CommentMapper commentMapper;

    public CommentService(CommentRepository commentRepository,
                          EventRepository eventRepository,
                          CommentMapper commentMapper) {
        this.commentRepository = commentRepository;
        this.eventRepository = eventRepository;
        this.commentMapper = commentMapper;
    }

    public void addComment(CommentCreateDTO commentDto, User user) {
        Optional<Event> event = eventRepository.findById(Long.valueOf(commentDto.getEventId()));
        if (event.isEmpty()) {
            throw new IllegalArgumentException("no event with this id");
        }

        event.get().setCommentsCnt(event.get().getCommentsCnt() + 1);

        Comment comment = Comment.builder()
                .content(commentDto.getContent())
                .user(user)
                .event(event.get())
                .build();

        commentRepository.save(comment);
    }

    public List<CommentDto> getCommentsByEvent(Long eventId) {
        Specification<Comment> spec = CommentSpecification.hasEventId(eventId);
        List<Comment> comments = commentRepository.findAll(spec);
        return commentMapper.toCommentDtoList(comments);
    }

    public void deleteComment(Long commentId, User user) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if (comment.isEmpty()) {
            throw new IllegalArgumentException("no such comment to delete");
        }
        if (!user.getId().equals(comment.get().getUser().getId())) {
            throw new UnAuthorizedException("you are not authorized to remove this comment");
        }

        Event event = comment.get().getEvent();
        event.setCommentsCnt(event.getCommentsCnt() - 1);

        commentRepository.delete(comment.get());
    }
}