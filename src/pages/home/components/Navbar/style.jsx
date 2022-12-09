import styled from "@emotion/styled";
import theme from "../../../../design-system/config";



export const NavbarWrapper = styled("div") `
    label : NavbarWrapper;
    background-color: ${theme.black};
    padding: 1.5rem 0;
    color: ${theme.white};
    position: fixed;
    z-index: 100;
    width: 100%;
`
export const NavContainer = styled("div") `
    label : NavContainer;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const NavTitle = styled("span") `
    label : NavTitle;
    font-size: 1.7rem;
    

`
export const Event = styled("span") `
    label : Event;
    color: ${theme.primary};
`
export const Links = styled("a") `
    label : Links;
    font-size: 1rem;
    color: ${theme.white};
    text-decoration: none;
    cursor: pointer;
`
export const LinkWrapper = styled("span") `
    label : LinkWrapper;
    gap: 2rem;
    display: flex;
    align-items: center;
    
`