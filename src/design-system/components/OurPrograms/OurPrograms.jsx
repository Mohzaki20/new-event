import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Description, IconWrapper, Image, ImageWrapper, Name, OurProgramsWrapper, Title } from "./style";

export default function OurPrograms({img,time,room,title,name,description,alt}) {
    return (
        <OurProgramsWrapper>
            <ImageWrapper>
                <Image src={img} alt={alt} width="100%"></Image>
            </ImageWrapper>
            <div>
                <IconWrapper>
                    <div>
                        <FontAwesomeIcon size="xs" icon={faClock} /> {time}
                    </div>
                    <div>
                        <FontAwesomeIcon style={{paddingRight:"2px"}}size="xs" icon={faMapMarker} /><span> Room</span> {room}
                    </div>
                </IconWrapper>
                <Title>{title}</Title>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </div>
        </OurProgramsWrapper>
    );
}
