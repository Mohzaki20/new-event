import React from 'react';
import { SpeakersWrapper } from './style';




export default function CreativeSpeaker({img,name,job,alt}) {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%"></img>
            <h2>{name}</h2>
            <span>{job}</span>
        </SpeakersWrapper>
    )
}