import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";
import styles from "./Contact.module.scss";
import Image from "../../components/Image/Image";
import Heading from "../../components/Text/Heading/Heading";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

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
    <>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Heading type="h1" font="primary" marginBottom={24}>
            Contact
          </Heading>
        </div>
        <Image name="paperPlane" />
      </header>
      <main className={styles.main}>
          <Paragraph size="large">{contactData}</Paragraph>
      </main>
    </>
  );
};

export default Contact;
