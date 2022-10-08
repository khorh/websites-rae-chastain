import "./Footer.scss";
import Icon from "../Icon/Icon";
import Paragraph from "../Text/Paragraph/Paragraph";

const Footer = () => {
  return (
    <footer className="footer">
      <Paragraph size="medium" weight={500}>
        © Rae Chastain
      </Paragraph>
      <div>
        <Icon name="facebook" />
        <Icon name="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
