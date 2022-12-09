import React from "react";
import { Fade } from "react-reveal";
import OurSponsor from "../../../../design-system/components/OurSponsors/ourSponsors";
import sponsorData from "../../../../design-system/components/OurSponsors/sponsorsData";
import { Description, Div, ImgsComponent, Span, SponsorWrapper } from "./style";

export default function Sponsors() {
    return (
        <SponsorWrapper>
            <div className="container">
                <Div>
                    Our <Span>Sponsors</Span>
                </Div>
                <Description>
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
                    adipisicing elit. Commodi, aliquam!
                </Description>
                <Fade right>
                <ImgsComponent>
                    {
                        sponsorData.map(item => {
                            return(
                            <OurSponsor src={item.src} key={item.id} alt={item.alt}/>
                        )})
                    }
                </ImgsComponent>
                </Fade>
            </div>
        </SponsorWrapper>
    );
}
