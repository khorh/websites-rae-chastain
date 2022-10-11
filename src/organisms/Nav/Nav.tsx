import { FC } from "react";
import "./Nav.scss";
import Logo from "../../components/Logo/Logo";
import NavDropdownMenu from "./NavDropdownMenu/NavDropdownMenu";
import NavHorizontalMenu from "./NavHorizontalMenu/NavHorizontalMenu";
import { navMenuContentProps } from "../../interfaces/interfaces";

const Nav: FC<navMenuContentProps> = () => {
  const navMenuContent = [
    {
      label: "Books",
      link: "/home",
    },
    {
      label: "Illustrations",
      link: "/illustrations",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="nav">
      <Logo marginBottom={16} />
      <div className="nav__dropdown">
        <NavDropdownMenu navMenuContent={navMenuContent} />
      </div>
      <NavHorizontalMenu navMenuContent={navMenuContent} />
    </nav>
  );
};

export default Nav;
