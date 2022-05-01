import "./Footer.scss";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">© 2022 Rae Chastain</p>
            <div>
                <a className="footer__social-media" href="https://www.facebook.com/readchastain" target="_blank">
                    <img className="footer__icon" src={Facebook} alt="facebook logo" />
                </a>
                <a className="footer__social-media" href="https://www.instagram.com/readchastain" target="_blank">
                    <img className="footer__icon" src={Instagram} alt="instagram logo" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
