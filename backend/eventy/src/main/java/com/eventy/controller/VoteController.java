package com.eventy.controller;


import com.eventy.dto.request.VoteCreateDTO;
import com.eventy.dto.response.VoteDto;
import com.eventy.entity.User;
import com.eventy.security.user.CurrentUser;
import com.eventy.service.vote.VoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VoteController {

    VoteService voteService;

    public VoteController(VoteService voteService){
        this.voteService = voteService;
    }

    @PostMapping("votes")
    public ResponseEntity<VoteCreateDTO> createVote(VoteCreateDTO voteDto, @CurrentUser User user){
        voteService.addVote(voteDto, user);
        return ResponseEntity.ok(voteDto);
    }

    @GetMapping("votes/{eventId}")
    public ResponseEntity<List<VoteDto>> getVotes(@PathVariable Long eventId){
        return ResponseEntity.ok(voteService.getVotesByEvent(eventId));
    }

    @DeleteMapping("votes/{id}")
    public ResponseEntity<Void> deleteVote(@PathVariable Long id, @CurrentUser User user){
        voteService.deleteVote(id, user);
        return ResponseEntity.noContent().build();
    }
}
