import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import contact from "../../../../design-system/shared/assets/Contact/contact-bg.jpg";

export const ContactWrapper = styled("section")`
    label: ContactWrapper;
    padding: 4rem 0;
    background: url(${contact}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ContactContainer = styled("div")`
    label: ContactContainer;
    display: flex;
    gap: 3rem;
    justify-content: center;
`;
export const Info = styled("div")`
    label: Info;
    padding: 3rem 0;
    width: 50%;
`;
export const Div = styled("div")`
    label: Div;
    color: ${theme.black};
    font-weight: bold;
    font-size: 2rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
`;
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary};
`;
export const Description = styled("p")`
    padding-top: 0.5rem;
    width: 600px;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color:${theme.gray} ;
`;
export const Text = styled("p")`
label: Text;
color: ${theme.gray};
font-size: 1.2rem;
font-weight: normal;
line-height: 1.5rem;
`;
export const RegisterBtn = styled("button") `
    label : RegisterBtn;
    color: ${theme.white};
    border: 2px solid ${theme.primary};
    background-color: ${theme.primary};
    font-size: 1.2rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
    width: fit-content;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 50px;
    :hover {
        background-color: transparent;
        color: ${theme.black};
        border: 2px solid ${theme.black};
    }
`
export const Form = styled("div")`
label: Form;
width: 40%;
height: 500px;
background-color: ${theme.white};
border-radius: 20%;
padding: 3rem 0 0 0;
`;
export const FormWrapper = styled("div")`
    label: FormWrapper;
    width: 40%;
    display: block;
    padding: 0 3.5rem;
    gap: 1rem;
    margin: 0 ;
    margin-top:3rem;
    `
;
export const InputRegister = styled("input")`
    label: InputRegister;
    background-color: transparent;
    padding: .6rem;
    border-radius: 5px;
    width: 250px;
    font-size: 1rem;
    border: none;
    border-bottom: 1.5px solid #eee;
    color: ${theme.black};
    ::placeholder {
        font-size: .9rem;
        font-weight: bold;
        color: ${theme.gray};
    }:focus {
        outline: none;
    }
`;
export const RegisterBtn2 = styled("button") `
    label : RegisterBtn;
    color: ${theme.white};
    background-color: #444;
    border: 2px solid #444;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    margin-top: 5.5rem;
    width: fit-content;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 50px;
    :hover {
        background-color: ${theme.primary};
        color: ${theme.white};
        border: 2px solid ${theme.primary};
    }
    
`