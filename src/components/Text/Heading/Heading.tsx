import { FC } from "react";
import styles from "./Heading.module.scss";
import "../../../styles/main.scss";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * What is the type?
   */
  type: "h1" | "h2";
  /**
   * What is the font?
   */
  font: "primary" | "secondary";
  /**
   * What is the spacing at the bottom?
   */
  marginBottom?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Heading: FC<HeadingProps> = (props) => {
  // Defaults
  const marginBottom = props.marginBottom
    ? `marginBottom__${props.marginBottom}`
    : "marginBottom__0";

  switch (props.type) {
    case "h1":
      return (
        <h1 className={`${styles[props.font]} ${marginBottom}`}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${styles[props.font]} ${marginBottom}`}>
          {props.children}
        </h2>
      );
  }
};

export default Heading;
