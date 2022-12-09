import React from "react";
import { Description, Div, FormWrapper, InputRegister, RegisterBtn, RegisterContainer, RegisterWrapper, Span, Text } from "./style";

export default function Register() {
    return (
        <RegisterWrapper>
            <div className="container">
                <RegisterContainer>
                    <div style={{width:"55%"}}>
                <Div>
                    Register <Span>Here</Span>
                </Div>
                <Text>repudiandae asperiores neque ea earum
                    similiqueexercitationem possimus repudiandae sapiente dolores?</Text>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
                    exercitationem possimus repudiandae asperiores neque ea earum
                    similique sapiente dolores?Lorem ipsum dolor sit amet.
                </Description>
                </div>
                <FormWrapper>
                    <InputRegister type="text" placeholder="First Name"/>
                    <InputRegister type="text" placeholder="Last Name"/>
                    <InputRegister type="number" placeholder="Phone Number"/>
                    <InputRegister type="email" placeholder="E-mail"/>
                    <RegisterBtn>Register</RegisterBtn>
                </FormWrapper>
                </RegisterContainer>
            </div>
        </RegisterWrapper>
    );
}
