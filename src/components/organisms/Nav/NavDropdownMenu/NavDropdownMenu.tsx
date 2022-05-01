import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./NavDropdownMenu.scss";
import Cross from "../../assets/images/x-circle.svg";
import List from "../../assets/images/list.svg";

interface NavMenuItemsProperties {
    navMenuContent: any;
}

const NavDropdownMenu = (props: NavMenuItemsProperties) => {
    const {navMenuContent: navMenuItems} = props;

    // Menu opens and closes
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Menu links
    const NavDropdownMenuItems = navMenuItems.map((navMenuItem: { link: string; label: string; }) => {
        return (
            <NavLink
                className={({isActive}) => (isActive ? "nav__dropdown-menu__item nav__dropdown-menu__item--active" : "nav__dropdown-menu__item")}
                to={navMenuItem.link}
                key={navMenuItem.label}
            >
                {navMenuItem.label}
            </NavLink>
        );
    });

    return (
        <div onClick={toggleMenu}>
            {!showMenu &&
                <img className="nav__dropdown-menu__icon" src={List} alt="list icon" />
            }
            {showMenu &&
                <div className="nav__dropdown-menu">
                    <img className="nav__dropdown-menu__icon" src={Cross} alt="cross icon" />
                    {NavDropdownMenuItems}
                </div>
            }
        </div>
    );
};

export default NavDropdownMenu;
