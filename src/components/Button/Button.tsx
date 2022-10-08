import { FC } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What is the type?
   */
  type: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={`${styles.base} ${styles[props.type]}`}>
      {props.children}
    </button>
  );
};

export default Button;
