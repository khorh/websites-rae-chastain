import { useState, useEffect } from "react";
import StoryblokClient from "storyblok-js-client";
import styles from "./About.module.scss";
import Image from "../../components/Image/Image";
import Heading from "../../components/Text/Heading/Heading";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

let Storyblok = new StoryblokClient({
  accessToken: "4UDPA39TEehWMG9eE631oAtt",
});

const About = () => {
  const [aboutBooksData, setAboutBooksData] = useState<string>();
  const [aboutIllustrationsData, setAboutIllustrationsData] =
    useState<string>();

  useEffect(() => {
    Storyblok.get("cdn/stories/130595556", {})
      .then((response) => {
        setAboutBooksData(response.data.story.content.about_books);
        setAboutIllustrationsData(
          response.data.story.content.about_illustrations
        );
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
            About
          </Heading>
        </div>
      </header>
      <main className={styles.main}>
        <Image name="womanDesigning" />
        <div>
          <Paragraph size="large" marginBottom={16}>
            {aboutBooksData}
          </Paragraph>
          <Paragraph size="large">{aboutIllustrationsData}</Paragraph>
        </div>
      </main>
    </>
  );
};

export default About;
