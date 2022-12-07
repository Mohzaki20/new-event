import styled from "@emotion/styled";
import theme from "../../config";


export const OurProgramsWrapper = styled("div") `
    label :OurProgramsWrapper;
    display : flex;
    align-items: center;
    gap: 3rem;
`
export const Image = styled("img") `
    label :Image;
    border-radius: 50%;
`
export const ImageWrapper = styled("div") `
    label :ImageWrapper;
    width: 15%;
    padding: 2rem 0;
`
export const IconWrapper = styled("div") `
    label :IconWrapper;
    display: flex;
    gap: 2rem;
    color: #666;
`
export const Title = styled("h2") `
    label :Title;
    color: ${theme.black};
    margin: 1rem 0 .5rem 0;
`
export const Name = styled("h3") `
    label :Name;
    color: ${theme.gray};
`
export const Description = styled("p") `
    label :Description;
    color: ${theme.gray};
`