import styled from "@emotion/styled";
import theme from './../../../../src/design-system/config';


export const WatchWrapper = styled("section") `
    label : WatchWrapper;
    padding: 6rem 0;
    display: flex;
    align-items: flex-start;
    column-gap: 30px;
`
export const Span = styled("span") `
    label : Span;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${theme.secondary};
`
export const P = styled("p") `
    label : P;
    font-size: 1.2rem;
    color: ${theme.gray};
    padding-top: 1rem;
    line-height: 1.7rem;
`