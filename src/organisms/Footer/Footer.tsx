import styles from "./Footer.module.scss";
import Divider from "../../components/Divider/Divider";
import Icon from "../../components/Icon/Icon";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Divider marginBottom={24} />
      <Paragraph size="medium" weight={500} marginBottom={16}>
        © Rae Chastain
      </Paragraph>
      <div className={styles.container__icons}>
        <Icon name="facebook" size="small" />
        <Icon name="instagram" size="small" />
      </div>
    </footer>
  );
};

export default Footer;
