import React from "react";
import { AccordionWrap, Description, Div, Span } from "./style";
import Accordion from './../Accordion';

export default function AccordionComponent() {
    return (
        <AccordionWrap>
        <div className="container">
            <Div>
                Do You Have <Span>Question</Span> ?
            </Div>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                aliquam!
            </Description>
            <Accordion/>
        </div>
        </AccordionWrap>
    );
}
