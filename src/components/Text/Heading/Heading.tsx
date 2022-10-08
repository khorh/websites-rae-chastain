import { FC } from "react";
import styles from "./Heading.module.scss";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * What is the type?
   */
  type: "h1" | "h2";
  /**
   * What is the font?
   */
  font: "primary" | "secondary";
}

const Heading: FC<HeadingProps> = (props) => {
  switch (props.type) {
    case "h1":
      return <h1 className={`${styles[props.font]}`}>{props.children}</h1>;
    case "h2":
      return <h2 className={`${styles[props.font]}`}>{props.children}</h2>;
  }
};

export default Heading;
