import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const FooterWrapper = styled("section")`
    label: FooterWrapper;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
`;
export const Div = styled("div")`
    label: Div;
    text-transform: capitalize;
    color: ${theme.gray};
    font-weight: bold;
    margin: 1.2rem 0 2rem 2.5rem;
    `
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary};
    text-transform: capitalize;
    margin-left: .2rem;
`;
export const Ul = styled("ul")`
    label: ul;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;
export const Li = styled("li")`
    label: Li;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.gray};
    padding: 1rem;
    border-radius: 50%;
    transition: 0.3s all;
    cursor: pointer;
    :hover {
        background-color: ${theme.primary};
        color: ${theme.white};
    }
`;
