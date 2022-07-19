import "./About.scss";
import StoryblokClient from "storyblok-js-client";
import RaeChastain from "../../assets/images/rae-chastain.jpg";
import Text from "../../components/Text/Text";
import Image from "../../components/Image/Image";
import { useState, useEffect } from "react";

let Storyblok = new StoryblokClient({
    accessToken: "4UDPA39TEehWMG9eE631oAtt"
});

const About = () => {
    const [aboutBooksData, setAboutBooksData] = useState<string>();
    const [aboutIllustrationsData, setAboutIllustrationsData] = useState<string>();

    useEffect(() => {
        Storyblok.get("cdn/stories/130595556", {})
            .then(response => {
                setAboutBooksData(response.data.story.content.about_books);
                setAboutIllustrationsData(response.data.story.content.about_illustrations);
            }).catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <main className="about">
            <Image name="womanDesigning" />
            <Text type="h1" primary text="About" />
            <section className="about__text">
                <Text type="p" text={aboutBooksData} />
                <Text type="p" text={aboutIllustrationsData} />
            </section>
            <img className="about__author" src={RaeChastain} alt="photo of rae chastain" />
        </main>
    );
};

export default About;
