import {NavLink} from "react-router-dom";
import "./NavHorizontalMenu.scss";

interface NavMenuItemsProperties {
    navMenuItems: any;
}

const NavHorizontalMenu = (props: NavMenuItemsProperties) => {
    const {navMenuItems} = props;

    // Menu Links
    const individualNavMenuItems = navMenuItems.map((navMenuItem: { link: string; label: string; }) => {
        return (
            <NavLink
                className="nav__horizontal-menu__item"
                to={navMenuItem.link}
                key={navMenuItem.label}
            >
                {navMenuItem.label}
            </NavLink>
        );
    });

    return (
        <div className="nav__horizontal-menu">
            {individualNavMenuItems}
        </div>
    );
};

export default NavHorizontalMenu;
