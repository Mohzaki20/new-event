import React from 'react'
import { Description, Div, SliderWrapper, Span, SpeakersWrapper } from './style'
import Slider from './Slider';

export default function CreativeSpeakers() {
    return (
        <SpeakersWrapper>
            <div className='container'>
            <Div>Creative <Span>Speakers</Span></Div>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aliquam!</Description>
            <SliderWrapper>
                <Slider/>
            </SliderWrapper>
            </div>
            </SpeakersWrapper>
    )
}
