import React from 'react'
import { H3, HeaderWrapper, LearnBtn, Title, RegisterBtn } from './style';

export default function Header() {
    return (
        <HeaderWrapper>
            <H3>July 22 - 26 in San Francisco, CA</H3>
            <Title>Web Design Conference</Title>
            <LearnBtn>LEARN MORE</LearnBtn>
            <RegisterBtn>REGISTER NOW</RegisterBtn>
        </HeaderWrapper>
    )
}
