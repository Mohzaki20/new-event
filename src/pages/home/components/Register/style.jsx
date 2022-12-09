import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import Register from "../../../../design-system/shared/assets/Register/register-bg.jpg";

export const RegisterWrapper = styled("section")`
    label: RegisterWrapper;
    background: url(${Register}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    padding: 3rem 0;
`;
export const Div = styled("div")`
    label: Div;
    color: ${theme.white};
    font-weight: bold;
    font-size: 2rem;
    padding-top: 2rem;
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
export const Text = styled("h3")`
label: Text;
color: ${theme.white};
font-weight: bold;
font-size: 1rem;
font-size: 1.2rem;  
line-height: 1.5rem;
`;
export const RegisterContainer = styled("div")`
    label: RegisterContainer;
    display: flex;
    gap: 2rem;
`;
export const FormWrapper = styled("div")`
    label: FormWrapper;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top:3rem;`
;
export const InputRegister = styled("input")`
    label: InputRegister;
    background-color: transparent;
    padding: .6rem;
    border-radius: 5px;
    border: 1.5px solid ${theme.white};
    color: ${theme.white};
    ::placeholder {
        font-size: .9rem;
    }
`;
export const RegisterBtn = styled("button") `
    label : RegisterBtn;
    color: ${theme.white};
    border: 2px solid ${theme.primary};
    background-color: ${theme.primary};
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: fit-content;
    margin: 1rem 0 0 160px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 50px;
    :hover {
        background-color: transparent;
        color: ${theme.white};
        border: 2px solid ${theme.white};
    }
`