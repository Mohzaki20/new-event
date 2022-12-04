import React from "react";
import { AboutWrapper, P, Span } from "./style";
import aboutUs from "../../../../design-system/shared/assets/AboutUs/about-us.jpg"
export default function AboutUs() {
    return (
        <div className="container">
            <AboutWrapper>
                <div style={{flex:"1"}}>
                    <Span>
                        New Event is a fully responsive one-page template for
                        events,conferences or workshops.
                    </Span>
                    <P>
                        This is a Bootstrap v3.3.6 layout that is responsive and mobile
                        friendly You may download and modify this template for your website.
                        Please tell your friends about templatemo
                    </P>
                    <P>
                        Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
                        luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </P>
                </div>
                <div style={{flex:"1"}}>
        <img width="100%" src={aboutUs} alt="about"></img>
                </div >
            </AboutWrapper>
        </div>
    );
}

