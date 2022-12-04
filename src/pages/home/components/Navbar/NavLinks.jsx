import React from 'react';
import { Links } from './style';

export default function NavLink({navLink,navText,color}) {
    return (
    <Links style={{color:color}} href={navLink} >{navText}</Links>
    )
}