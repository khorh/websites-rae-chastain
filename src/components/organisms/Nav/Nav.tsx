import "./Nav.scss";
import LogoNav from "../../Logo/Logo";
import NavDropdownMenu from "../../molecules/NavDropdownMenu/NavDropdownMenu";
import NavHorizontalMenu from "../../molecules/NavMenu/NavHorizontalMenu";

const Nav = () => {
    const navMenuItems = [
        {
            label: "Books",
            link: "/home"
        },
        {
            label: "Illustrations",
            link: "/illustrations"
        },
        {
            label: "Blog",
            link: "/blog"
        },
        {
            label: "About",
            link: "about"
        },
        {
            label: "Contact",
            link: "contact"
        }
    ];

    return (
        <nav className="nav">
            <LogoNav />
            <div className="nav__dropdown">
                <NavDropdownMenu navMenuItems={navMenuItems} />
            </div>
            <NavHorizontalMenu navMenuItems={navMenuItems} />
        </nav>
    );
};

export default Nav;
