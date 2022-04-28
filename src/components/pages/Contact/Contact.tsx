import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";
import "./Contact.scss";
import PaperPlane from "../../../assets/images/paper-plane.jpg";

let Storyblok = new StoryblokClient({
    accessToken: "4UDPA39TEehWMG9eE631oAtt"
});

const Contact = () => {
    const [contactData, setContactData] = useState<string>();

    // useEffect(() => {
    //     Storyblok.get("cdn/stories/127058094", {})
    //         .then(response => {
    //             setContactData(response.data.story.content.contact_info);
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }, []);



    useEffect(() => {
        Storyblok.get("cdn/stories/127058094", {})
            .then(response => {
                setContactData(response.data.story.content.contact_info);
            }).catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <main className="contact">
            <section>
                <img className="contact__image" src={PaperPlane} alt="people throwing paper plane" />
            </section>
            <section className="contact__text">
                <p>{contactData}</p>
            </section>
        </main>
    );
};

export default Contact;
