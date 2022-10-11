import { FC } from "react";
import styles from "./Icon.module.scss";
import "../../styles/main.scss";
import iconList from "./IconList";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * What is the icon's name?
   */
  name: string;
  /**
   * What is the icon's size?
   */
  size?: "small" | "medium";
  /**
   * What is the spacing on the right?
   */
  marginRight?: 4 | 8 | 16 | 24 | 32 | 48;
}

const Icon: FC<IconProps> = (props) => {
  // Defaults
  const size = props.size ?? "medium";
  const marginRight = props.marginRight
    ? `marginRight__${props.marginRight}`
    : "marginRight__0";

  // Method to filter and show the icon
  const filteredIcon = iconList.filter((filter) => filter.name === props.name);

  const displayIcon = filteredIcon.map((display) => (
    <display.svg key={props.name} />
  ));

  return (
    <div className={`${styles.container} ${styles[size]} ${marginRight}`}>
      {displayIcon}
    </div>
  );
};

export default Icon;
