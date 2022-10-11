import { FC } from "react";
import styles from "./Carousel.module.scss";
import Icon from "../../components/Icon/Icon";

const Carousel: FC = () => {
  return (
    <div>
      <Icon name="play" />
      <div className={styles.container__dot}>
        <Icon name="dot" />
        <Icon name="dot" />
        <Icon name="dot" />
      </div>
    </div>
  );
};

export default Carousel;
