import React from "react";
import { useLocation } from "react-router-dom";
import links from "./Links";
import NavLink from "./NavLinks";
import theme from './../../../../design-system/config';

export default function NavItems() {
    const route = useLocation();
    const items = links();
    return (
        items.map((link, index) => {
        return (
            <NavLink color={route.pathname === link.navLinks? theme.active : theme.white} navLink={link.navLinks} navText={link.navText} key={index} />
            );
        })
        )
}
