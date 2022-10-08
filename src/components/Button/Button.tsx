import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  /**
   * What is the type?
   */
  type: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props: any) => {
  const type = props.type;

  return (
    <button className={`${styles.base} ${styles[type]}`}>
      {props.children}
    </button>
  );
};

export default Button;
