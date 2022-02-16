import "./Footer.scss";
import Facebook from "../../../assets/images/facebook.svg";
import Instagram from "../../../assets/images/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">© 2022 Rae Chastain</p>
            <div>
                <img className="footer__icon" src={Facebook} alt="facebook logo" />
                <img className="footer__icon" src={Instagram} alt="instagram logo" />
            </div>
        </footer>
    );
};

export default Footer;
