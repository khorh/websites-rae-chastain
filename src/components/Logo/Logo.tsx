import { FC } from "react";
import styles from "./Logo.module.scss";
import LogoRaeChastain from "../../assets/images/logo.png";

export interface LogoProps {
  /**
   * What is the spacing at the bottom?
   */
  marginBottom?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Logo: FC<LogoProps> = (props) => {
  // Defaults
  const marginBottom = props.marginBottom
    ? `marginBottom__${props.marginBottom}`
    : "marginBottom__0";

  return (
    <img
      className={`${styles.base} ${marginBottom}`}
      src={LogoRaeChastain}
      alt="rae chastain's logo"
    />
  );
};

export default Logo;
