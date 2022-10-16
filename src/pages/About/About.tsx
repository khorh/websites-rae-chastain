import { useState, useEffect } from "react";
import StoryblokClient from "storyblok-js-client";
import "./About.scss";
import RaeChastain from "../../assets/images/rae-chastain.jpg";
import Heading from "../../components/Text/Heading/Heading";
import Paragraph from "../../components/Text/Paragraph/Paragraph";
import Image from "../../components/Image/Image";

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
    <main className="about">
      <Image name="womanDesigning" />
      <Heading type="h1" font="primary">
        About
      </Heading>
      <section className="about__text">
        <Paragraph size="medium">{aboutBooksData}</Paragraph>
        <Paragraph size="medium">{aboutIllustrationsData}</Paragraph>
      </section>
      <img
        className="about__author"
        src={RaeChastain}
        alt="photo of rae chastain"
      />
    </main>
  );
};

export default About;
