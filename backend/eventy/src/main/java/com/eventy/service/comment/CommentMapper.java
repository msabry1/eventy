package com.eventy.service.comment;

import com.eventy.dto.request.CommentCreateDTO;
import com.eventy.dto.response.CommentDto;
import com.eventy.entity.Comment;
import com.eventy.entity.Event;
import com.eventy.entity.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CommentMapper {

    public CommentDto toCommentDto(Comment comment) {
        if (comment == null) {
            return null;
        }
        CommentDto commentDto = new CommentDto();
        commentDto.setCommentId(comment.getId());
        commentDto.setContent(comment.getContent());
        commentDto.setOwnerId(comment.getUser().getId().toString());
        commentDto.setOwnerName(comment.getUser().getName());
        commentDto.setOwnerPhoto(comment.getUser().getPhoto());
        return commentDto;
    }

    public List<CommentDto> toCommentDtoList(List<Comment> comments) {
        List<CommentDto> commentDtos = new ArrayList<>();
        for (Comment comment : comments) {
            commentDtos.add(toCommentDto(comment));
        }
        return commentDtos;
    }

    public Comment mapToComment(CommentCreateDTO commentDto, User user, Event event) {
        Comment comment = new Comment();
        comment.setContent(commentDto.getContent());
        comment.setUser(user);
        comment.setEvent(event);
        return comment;
    }

}