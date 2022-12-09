import React from 'react'
import { Description, Div, H1, P, VenueWrapper } from './style';

export default function Venue() {
    return (
        <VenueWrapper>
            <div className='container'>
            <H1>Venue</H1>
            <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
                    exercitationem possimus repudiandae asperiores neque ea earum
                    similique sapiente dolores?Lorem ipsum dolor sit amet.
                </Description>
                <P>
                    <Div>New Event</Div>
                    <Div>120 Market street,suite 110</Div>
                    <Div>san francisco,CA 10110</Div>
                    <Div>tel:011-248-795</Div>
                </P>
            </div>
        </VenueWrapper>
    )
}
