import styled from "@emotion/styled";
import theme from "../../../../design-system/config";
import Venue from "../../../../design-system/shared/assets/Venue/venue.jpg";

export const VenueWrapper = styled("section")`
    label: VenueWrapper;
    background: url(${Venue}) fixed;
    background-repeat: no-repeat;
    background-size:cover;
    height: 500px;
    padding: 4rem 0;
`;
export const H1 = styled("h1")`
    label: H1;
    color: ${theme.primary};
    font-weight: bold;
    font-size: 2rem;
`;
export const Description = styled("p")`
    label: p;
    padding-top: 0.5rem;
    width: 600px;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color:${theme.gray} ;
`;
export const P = styled("p")`
    label: P;
    margin-top: 3rem;
`;
export const Div = styled("p")`
    label: Div;
    font-weight: bold;
    line-height: .8rem;
    text-transform: capitalize;
`;