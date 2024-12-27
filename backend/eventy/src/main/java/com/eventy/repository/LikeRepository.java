package com.eventy.repository;

import com.eventy.entity.Like;
import com.eventy.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long>, JpaSpecificationExecutor<Like> {
}