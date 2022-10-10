import { FC } from "react";
import styles from "./Divider.module.scss";
import "../../styles/main.scss";

export interface DividerProps {
  marginBottom?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Divider: FC<DividerProps> = (props) => {
  // Defaults
  const marginBottom = props.marginBottom
    ? `marginBottom__${props.marginBottom}`
    : "marginBottom__0";

  return <hr className={`${styles.base} ${styles[marginBottom]}`} />;
};

export default Divider;
