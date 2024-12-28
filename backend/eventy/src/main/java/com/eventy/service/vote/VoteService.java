package com.eventy.service.vote;


import com.eventy.dto.request.VoteCreateDTO;
import com.eventy.dto.response.VoteDto;
import com.eventy.entity.Event;
import com.eventy.entity.Like;
import com.eventy.entity.User;
import com.eventy.enums.VoteType;
import com.eventy.exceptions.UnAuthorizedException;
import com.eventy.repository.EventRepository;
import com.eventy.repository.LikeRepository;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoteService {

    LikeRepository likeRepository;
    EventRepository eventRepository;
    VoteMapper voteMapper;

    public VoteService(LikeRepository likeRepository, EventRepository eventRepository,
                       VoteMapper voteMapper){
        this.likeRepository = likeRepository;
        this.eventRepository = eventRepository;
        this.voteMapper = voteMapper;
    }

    public void addVote(VoteCreateDTO voteDto, User user){
        Optional<Event> event = eventRepository.findById(Long.valueOf(voteDto.getEventId()));
        if(event.isEmpty()){
            throw new IllegalArgumentException("no event with this id");
        }
        if (voteDto.getType() == VoteType.UPVOTE){
            event.get().setUpVotes(event.get().getUpVotes() + 1);
        } else {
            event.get().setDownVotes(event.get().getDownVotes() + 1);
        }
        Like like = voteMapper.mapToLike(voteDto, user, event.get());
        likeRepository.save(like);
    }

    public List<VoteDto> getVotesByEvent(Long eventId){
        Specification<Like> spec = LikeSpecification.hasEventId(eventId);
        List<Like> votes = likeRepository.findAll(spec);
        return voteMapper.toVoteDtoList(votes);
    }

    public void deleteVote(Long voteId, User user){
        Optional<Like> vote = likeRepository.findById(voteId);
        if(vote.isEmpty()){
            throw new IllegalArgumentException("no such vote to delete");
        }
        if( !user.getId().equals(vote.get().getUser().getId())){
            throw new UnAuthorizedException("you are not authorized to remove this vote");
        }
        Event event = vote.get().getEvent();
        if (vote.get().getType() == VoteType.UPVOTE){
            event.setUpVotes(event.getUpVotes() - 1);
        } else {
            event.setDownVotes(event.getDownVotes() - 1);
        }
        likeRepository.delete(vote.get());
    }

}
