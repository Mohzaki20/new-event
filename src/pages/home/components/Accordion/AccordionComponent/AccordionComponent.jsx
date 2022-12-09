import React from "react";
import { AccordionWrap, Description, Div, Span } from "./style";
import Accordion from './../Accordion';
import { Fade } from "react-reveal";

export default function AccordionComponent() {
    return (
        <AccordionWrap>
        <div className="container">
        <Fade>
            <Div>
                Do You Have <Span>Question</Span> ?
            </Div>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                aliquam!
            </Description>
            <Accordion/>
        </Fade>
        </div>
        </AccordionWrap>
    );
}
