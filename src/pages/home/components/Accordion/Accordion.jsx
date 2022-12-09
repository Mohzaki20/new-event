import React, { useState } from 'react';
import { Data } from './data';
import { AccordionWrapper, Content, H2, Item, P, Title, Wrapper } from './style';

export default function Accordion() {
    const [active , setActive] = useState(0)
    const toggle = (i) => {
        
            if (active === i) {
                return setActive(null)
            }else {
                setActive(i)
            }
        
    }
    return (
        <Wrapper>
            <AccordionWrapper>
                {
                    Data.map((item,i) => {
                        return (
                            <Item key={i} onClick={() => {toggle(i)}}>
                            <Title>
                            <H2>{item.question}</H2>
                            <span style={{fontSize:"1.2rem"}}>{active === i ? "-" :"+"}</span>
                            </Title>
                            <Content className={active === i ? "show" : ""}>
                                <P>{item.answerOne}</P>
                                <P>{item.answerTwo}</P>
                            </Content>
                        </Item>
                        )
                    })
                }
            </AccordionWrapper>
        </Wrapper>
    )
}
