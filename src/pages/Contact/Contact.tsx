import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";
import "./Contact.scss";
import Text from "../../components/Text/Text";
import Image from "../../components/Image/Image";

let Storyblok = new StoryblokClient({
    accessToken: "4UDPA39TEehWMG9eE631oAtt"
});

const Contact = () => {
    const [contactData, setContactData] = useState<string>();

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
            <Image name="paperPlane" />
            <Text type="h1" primary text="Contact" />
            <section className="contact__text">
                <Text type="p" text={contactData} />
            </section>
        </main>
    );
};

export default Contact;
