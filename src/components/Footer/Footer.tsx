import styles from "./Footer.module.scss";
import Divider from "../Divider/Divider";
import Icon from "../Icon/Icon";
import Paragraph from "../Text/Paragraph/Paragraph";

const Footer = () => {
  return (
    <footer className={`${styles.base}`}>
      <Divider marginBottom={24} />
      <Paragraph size="medium" weight={500} marginBottom={16}>
        © Rae Chastain
      </Paragraph>
      <div className={styles.container}>
        <Icon name="facebook" />
        <Icon name="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
