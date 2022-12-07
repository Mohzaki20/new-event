import React from 'react'
import { Description, Div, ProgramsWrapper, Span, TabsWrapper } from './style'
import Tabs from './Tabs';

export default function OurPrograms() {
    return (
            <div className='container'>
        <ProgramsWrapper>
            <Div>Our <Span>Programs</Span></Div>
            <Description>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Commodi, aliquam!</Description>
            <TabsWrapper>
            <Tabs/>
            </TabsWrapper>
        </ProgramsWrapper>
            </div>
    )
}
