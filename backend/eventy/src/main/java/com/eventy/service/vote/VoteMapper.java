package com.eventy.service.vote;
import com.eventy.dto.response.VoteDto;
import com.eventy.entity.Like;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
public class VoteMapper {

    public VoteDto toVoteDto(Like like) {
        if (like == null) {
            return null;
        }
        VoteDto voteDto = new VoteDto();
        voteDto.setVoteId(like.getId());
        voteDto.setType(like.getType());
        voteDto.setOwnerId(like.getUser().getId().toString());
        voteDto.setOwnerName(like.getUser().getName());
        voteDto.setOwnerphoto(like.getUser().getPhoto());
        return voteDto;
    }

    public List<VoteDto> toVoteDtoList(List<Like> votes){
        List<VoteDto> voteDtos = new ArrayList<>();
        for(Like vote : votes){
            voteDtos.add(toVoteDto(vote));
        }
        return voteDtos;
    }
}
