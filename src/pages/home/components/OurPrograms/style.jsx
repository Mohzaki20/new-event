import styled from '@emotion/styled';
import theme from '../../../../design-system/config';


export const ProgramsWrapper = styled("section") `
    label : ProgramsWrapper;
    padding: 5rem 0 2rem 0;
    width: 940px;
`
export const Div = styled("div") `
    label : Div;
    color: ${theme.black};
    font-weight: bold;
    font-size: 2rem;
    padding-top: 2rem;
`
export const Span = styled("span") `
    label : Span;
    color: ${theme.primary};
`
export const Description = styled("p") `
    label : Description;
    color: ${theme.gray};
    padding-top: .5rem;

`
export const TabsWrapper = styled("div") `
    label : TabsWrapper;
    padding: 1rem 0;

`
export const Wrapper = styled("div") `
    label : Wrapper;
    display: flex;
    gap: 2rem;

`
export const TabSpan = styled("span") `
    label : TabSpan;
    font-weight: bold;
    color: ${theme.black};
    cursor: pointer;
    padding-bottom: 2rem;
`
export const Line = styled("div") `
    label : Line;
    width: 100%;
    background-color: ${theme.black};
    height: 1px;
    margin-bottom: 2rem ;
`