import { FC } from "react";
import styles from "./Icon.module.scss";
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
}

const Icon: FC<IconProps> = (props) => {
  // Defaults
  const size = props.size ?? "medium";

  // Method to filter and show the icon
  const filteredIcon = iconList.filter((filter) => filter.name === props.name);

  const displayIcon = filteredIcon.map((display) => (
    <display.svg key={props.name} />
  ));

  return (
    <div className={`${styles.common} ${styles.marginRight} ${styles[size]}`}>
      {displayIcon}
    </div>
  );
};

export default Icon;
