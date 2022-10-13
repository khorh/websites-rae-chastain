import { FC } from "react";
import styles from "./Button.module.scss";
import "../../styles/main.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What is the type?
   */
  type: "primary" | "secondary";
  /**
   * What is the spacing on the right?
   */
  marginRight?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Button: FC<ButtonProps> = (props) => {
  // Defaults
  const marginRight = props.marginRight
    ? `marginRight__${props.marginRight}`
    : "marginRight__0";
  return (
    <button
      className={`${styles.base} ${styles[props.type]} ${styles[marginRight]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
