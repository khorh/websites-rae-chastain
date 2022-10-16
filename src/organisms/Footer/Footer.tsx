import styles from "./Footer.module.scss";
import Divider from "../../components/Divider/Divider";
import Icon from "../../components/Icon/Icon";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

const Footer = () => {
  // Social media links
  const facebookLink = "https://www.facebook.com/readchastain/";
  const instagramLink = "https://www.instagram.com/readchastain/";

  return (
    <footer className={styles.container}>
      <Divider marginBottom={24} />
      <Paragraph size="medium" weight={500} marginBottom={16}>
        © Rae Chastain
      </Paragraph>
      <div className={styles.container__icons}>
        <a
          className={styles.container__icons__link}
          href={facebookLink}
          target="_blank"
        >
          <Icon name="facebook" size="small" marginRight={16} />
        </a>
        <a
          className={styles.container__icons__link}
          href={instagramLink}
          target="_blank"
        >
          <Icon name="instagram" size="small" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
