import { FC } from "react";
import styles from "./Paragraph.module.scss";
import "../../../styles/main.scss";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * What is the size?
   */
  size?: "medium" | "large";
  /**
   * What is the weight?
   */
  weight?: 400 | 500;
  /**
   * What is the spacing at the bottom?
   */
  marginBottom?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Paragraph: FC<ParagraphProps> = (props) => {
  // Defaults
  const size = props.size ?? "medium";
  const weight = props.weight ? `w${props.weight}` : "w400";
  const marginBottom = props.marginBottom
    ? `marginBottom__${props.marginBottom}`
    : "marginBottom__0";

  return (
    <p
      className={`${styles.base} ${styles[size]} 
        ${styles[weight]} ${marginBottom}`}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
