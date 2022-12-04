import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import header from "../../../../design-system/shared/assets/header/header.jpg";



export const HeaderWrapper = styled("section") `
    label : HeaderWrapper;
    height: 100vh;
    background: url(${header});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20% 0;
    text-align: center;

`

export const H3 = styled("h3") `
    label : H3;
    color: ${theme.white};
    font-size : 1.8rem;
`
export const Title = styled("h1") `
    label : Title;
    color: ${theme.white};
    font-size : 3rem;
`
export const LearnBtn = styled("button") `
    label : LearnBtn;
    color: ${theme.white};
    border: 2px solid ${theme.white};
    background-color: transparent;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    margin: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 4px;
    :hover {
        color: ${theme.secondary};
        background-color: ${theme.white};
    }
`
export const RegisterBtn = styled("button") `
    label : RegisterBtn;
    color: ${theme.white};
    border: 2px solid ${theme.primary};
    background-color: ${theme.primary};
    font-size: 1.2rem;
    padding: 1rem 3rem;
    margin: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 4px;
    :hover {
        color: ${theme.secondary};
        background-color: transparent;
        color: ${theme.white};
        border: 2px solid ${theme.white};

    }
`