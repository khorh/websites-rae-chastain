import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";
import "./Contact.scss";
import Heading from "../../components/Text/Heading/Heading";
import Paragraph from "../../components/Text/Paragraph/Paragraph";
import Image from "../../components/Image/Image";

let Storyblok = new StoryblokClient({
  accessToken: "4UDPA39TEehWMG9eE631oAtt",
});

const Contact = () => {
  const [contactData, setContactData] = useState<string>();

  useEffect(() => {
    Storyblok.get("cdn/stories/127058094", {})
      .then((response) => {
        setContactData(response.data.story.content.contact_info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="contact">
      <Image name="paperPlane" />
      <Heading type="h1" font="primary">
        Contact
      </Heading>
      <section className="contact__text">
        <Paragraph size="medium">{contactData}</Paragraph>
      </section>
    </main>
  );
};

export default Contact;
