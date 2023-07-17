import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenuLink.module.scss";

export interface NavMenuLinkProps
  extends React.HTMLAttributes<HTMLLinkElement> {
  /**
   * What is the key to each link?
   */
  key: string;
  /**
   * Where is the link going?
   */
  id: string;
}

const NavMenuLink: FC<NavMenuLinkProps> = (props) => {
  return (
    <NavLink className={styles.common} key={props.key} to={props.id}>
      {props.children}
    </NavLink>
  );
};

export default NavMenuLink;
