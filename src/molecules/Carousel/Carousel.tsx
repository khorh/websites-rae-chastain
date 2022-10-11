import { FC, useState } from "react";
import styles from "./Carousel.module.scss";
import Icon from "../../components/Icon/Icon";

const Carousel: FC = () => {
  const [toggleIcon, setToggleIcon] = useState<boolean>(true);

  const togglePlayPause = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__playPause} onClick={togglePlayPause}>
        {toggleIcon ? <Icon name="play" /> : <Icon name="pause" />}
      </div>
      <div className={styles.container__dots}>
        <Icon name="dot" marginRight={8} />
        <Icon name="dot" marginRight={8} />
        <Icon name="dot" />
      </div>
    </div>
  );
};

export default Carousel;
