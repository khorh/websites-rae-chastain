import "./Contact.scss";
import PaperPlane from "../../../assets/images/paper-plane.jpg";

const Contact = () => {
    return (
        <main className="contact">
            <h1 className="contact__title">Contact</h1>
            <section className="contact__text">
                <p>If you have media queries about my books or want to discuss illustrations for your own books or merchandise,
                    please contact me using hello@readchastain.com</p>
            </section>
            <section>
                <img className="contact__image" src={PaperPlane} alt="people throwing paper plane" />
            </section>
        </main>
    );
};

export default Contact;
