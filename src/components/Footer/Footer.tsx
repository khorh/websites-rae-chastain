import "./Footer.scss";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const Footer = () => {
    return (
        <footer className="footer">
            <Text type="footer" text="© Rae Chastain" />
            <div>
                <Icon name="facebook" />
                <Icon name="instagram" />
            </div>
        </footer>
    );
};

export default Footer;
