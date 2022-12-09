import React from 'react'
import { ContactContainer, ContactWrapper, Div, Form, FormWrapper, Info, InputRegister, RegisterBtn, RegisterBtn2, Span, Text } from './style'

export default function Contact() {
    return (
        <ContactWrapper>
            <div className='container'>
                <ContactContainer>
            <Info>
            <Div>
                    New <Span>Event</Span>
                </Div>
                <Text>Lorem ipsum dolor sit amet.repudiandae asperiores neque ea earum
                    similiqueexercitationem possimus repudiandae sapiente dolores?</Text>
                    <Text>repudiandae asperiores neque ea earum
                    similiqueexercitationem possimus repudiandae sapiente dolores?</Text>
                    <Text>possimus repudiandae asperiores neque ea earum
                    similiqueexercitationem possimus repudiandae sapiente dolores?</Text>
                    <RegisterBtn>Download Now</RegisterBtn>

            </Info>
            <Form>
            <Div style={{fontWeight:"normal",paddingLeft:"4rem"}}>
                    Keep In <Span>Touch</Span>
                </Div>
                <FormWrapper>
                    <InputRegister type="text" placeholder="First Name"/>
                    <InputRegister type="text" placeholder="Last Name"/>
                    <InputRegister type="email" placeholder="Message"/>
                    <RegisterBtn2>Send</RegisterBtn2>
                </FormWrapper>
            </Form>
            </ContactContainer>
            </div>
        </ContactWrapper>
    )
}
