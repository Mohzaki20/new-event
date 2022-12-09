import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const Wrapper = styled("section") `
    label : Wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const AccordionWrapper = styled("div") `
    label : AccordionWrapper;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
export const Item = styled("div") `
    label : Item;
    width: 90%;
    margin-top: 1rem;
    box-shadow: 0px 3px 6px -4px #777;
    border-radius: 5px;

    `
    export const Title = styled("div") `
        label : Title;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
        padding: .5rem 1rem ;
        cursor: pointer;

    `
export const H2 = styled("h2") `
    label : H2;
    font-size: 1rem;
    color: ${theme.black};
    text-transform: capitalize;
    font-weight: normal;
    font-size: 1.2rem;
`
export const Content = styled("div") `
    label : Content;
    padding: 0 .5rem;
    overflow: hidden;
    max-height: 0;
    border-radius: 5px;
    transition: 0.6s all cubic-bezier(0,1,0,1);
    &.show {
        height: auto;
        max-height: 999px;
        transition: 0.6s all cubic-bezier(1,0,1,0);
    }
`
export const P = styled("p") `
    label : P;
    color: ${theme.gray};
    padding: .5rem 0;
    text-align: left;
`