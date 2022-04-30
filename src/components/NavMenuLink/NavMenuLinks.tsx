import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./NavMenuLink";
import { navMenuContentProps } from "../../interfaces/interfaces";

interface NavMenuLinkProps {
    navMenuItems: navMenuContentProps;
};

const NavMenuLink : FC<NavMenuLinkProps> = (props) => {
    const {navMenuItems} = props;

    return (
        <NavLink
            className={({isActive}) => (isActive ? "nav__link__horizontal nav__link__horizontal--active" : "nav__link__horizontal")}
            to={navMenuItems.link}
            key={navMenuItems.label}
        >
            {navMenuItems.label}
        </NavLink>
    );
};

export default NavMenuLink;
