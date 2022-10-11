import { FC } from "react";
import styles from "./Divider.module.scss";
import "../../styles/main.scss";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * What is the spacing at the bottom?
   */
  marginBottom?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Divider: FC<DividerProps> = (props) => {
  // Defaults
  const marginBottom = props.marginBottom
    ? `marginBottom__${props.marginBottom}`
    : "marginBottom__0";

  return <hr className={`${styles.base} ${marginBottom}`} />;
};

export default Divider;
