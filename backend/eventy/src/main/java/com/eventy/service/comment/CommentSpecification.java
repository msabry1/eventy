package com.eventy.service.comment;

import com.eventy.entity.Comment;
import org.springframework.data.jpa.domain.Specification;

public class CommentSpecification {

    public static Specification<Comment> hasUserId(Long userId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("user").get("id"), userId);
    }

    public static Specification<Comment> hasEventId(Long eventId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("event").get("id"), eventId);
    }
}