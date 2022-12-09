import { faBehance, faDribbble, faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Div, FooterWrapper, Li, Span, Ul } from "./style";

export default function Footer() {
    const date = new Date();
    return (
        <FooterWrapper>
            <Div>
                copyright &copy; {date.getFullYear()} your company | designed by
                <Span>Mohammad Zaki</Span>
            </Div>
            <Ul>
            <Li>
            <FontAwesomeIcon icon={faFacebookF} />
            </Li>
            <Li>
            <FontAwesomeIcon icon={faTwitter} />
            </Li>
            <Li>
            <FontAwesomeIcon icon={faDribbble} />
            </Li>
            <Li>
            <FontAwesomeIcon icon={faBehance} />
            </Li>
            <Li>
            <FontAwesomeIcon icon={faGoogle} />
            </Li>
            </Ul>
        </FooterWrapper>
    );
}
