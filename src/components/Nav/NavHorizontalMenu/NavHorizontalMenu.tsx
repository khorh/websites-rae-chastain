import {NavLink} from "react-router-dom";
import "./NavHorizontalMenu.scss";

interface NavMenuItemsProperties {
    navMenuContent: any;
}

const NavHorizontalMenu = (props: NavMenuItemsProperties) => {
    const {navMenuContent: navMenuItems} = props;

    // Menu Links
    const individualNavMenuItems = navMenuItems.map((navMenuItem: { link: string; label: string; }) => {
        return (
            <NavLink
                className={({isActive}) => (isActive ? "nav__horizontal-menu__item nav__horizontal-menu__item--active" : "nav__horizontal-menu__item")}
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
