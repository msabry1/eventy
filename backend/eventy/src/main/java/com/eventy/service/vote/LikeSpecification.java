package com.eventy.service.vote;

import com.eventy.entity.Like;
import org.springframework.data.jpa.domain.Specification;

public class LikeSpecification {

    public static Specification<Like> hasUserId(Long userId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("user").get("id"), userId);
    }

    public static Specification<Like> hasEventId(Long eventId) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("event").get("id"), eventId);
    }
}
