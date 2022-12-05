import React from 'react';
import { H2, SpeakersWrapper, Span } from './style';




export default function CreativeSpeaker({img,name,job,alt}) {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%"></img>
            <H2>{name}</H2>
            <Span>{job}</Span>
        </SpeakersWrapper>
    )
}