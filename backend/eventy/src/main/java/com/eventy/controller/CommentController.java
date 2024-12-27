package com.eventy.controller;

import com.eventy.dto.request.CommentCreateDTO;
import com.eventy.dto.response.CommentDto;
import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import com.eventy.service.comment.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("comments")
    public ResponseEntity<CommentCreateDTO> createComment(@RequestBody CommentCreateDTO commentDto, @CurrentUser User user) {
        commentService.addComment(commentDto, user);
        return ResponseEntity.ok(commentDto);
    }

    @GetMapping("comments/{eventId}")
    public ResponseEntity<List<CommentDto>> getComments(@PathVariable Long eventId) {
        return ResponseEntity.ok(commentService.getCommentsByEvent(eventId));
    }

    @DeleteMapping("comments/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id, @CurrentUser User user) {
        commentService.deleteComment(id, user);
        return ResponseEntity.noContent().build();
    }
}