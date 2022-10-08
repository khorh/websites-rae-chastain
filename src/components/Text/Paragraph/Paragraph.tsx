import { FC, HTMLAttributes } from "react";
import styles from "./Paragraph.module.scss";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * What is the size?
   */
  size: "medium" | "large";
  /**
   * What is the weight?
   */
  weight?: 400 | 500;
}

const Paragraph: FC<ParagraphProps> = (props) => {
  const weight = props.weight ? `w${props.weight}` : "w400";
  return (
    <p
      className={`${styles.base} ${styles[props.size]} 
        ${styles[weight]}`}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
