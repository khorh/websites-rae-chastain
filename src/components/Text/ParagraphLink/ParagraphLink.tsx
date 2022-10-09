import { FC } from "react";
import styles from "./ParagraphLink.module.scss";

export interface ParagraphLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * What is the size?
   */
  size: "medium" | "large";
  /**
   * What is weight?
   */
  weight?: 400 | 500;
  /**
   * What is the link?
   */
  link?: string;
  /**
   * Does the link open in a new tab?
   */
  external?: boolean;
}

const ParagraphLinks: FC<ParagraphLinkProps> = (props) => {
  // Defaults
  const weight = props.weight ? `w${props.weight}` : "w500";
  const link = props.link ? `${props.link}` : "";
  const external = props.external ? "_blank" : "_self";

  return (
    <a
      className={`${styles.base} ${styles[props.size]} ${styles[weight]}`}
      href={link}
      target={external}
    >
      {props.children}
    </a>
  );
};

export default ParagraphLinks;
