import "./About.scss";
import RaeChastain from "../../../assets/images/rae-chastain.jpg";
import WomanDesigning from "../../../assets/images/woman-designing.jpg";

const About = () => {
    return (
        <main className="about">
            <h1 className="about__title">About</h1>
            <section>
                <img className="about__image" src={WomanDesigning} alt="woman designing" />
            </section>
            <section className="about__text">
                <p>Hi there! I'm Rae Chastain and I'm delighted that you've taken an interest in my books.  I've worked in a lot of different creative areas over the years, including animation, greetings cards, product design, furniture design, graphic design, furniture crafting, wedding stationery, cake baking with decoration and (for a considerable number of years) I've been teaching design and technology to a wonderfully recipient audience of teenagers! Life's been full and fun.  I've gotten to dabble in any creative field that I fancied deepening my skills in. But, by far and large, the greatest and most recent joy to have finally made a reality is the joy of creating children's picture books.  For the longest time, I've wanted to (but was too scared to) venture into this field.  After much development of storylines and illustration style, I finally wrote and illustrated my first couple of books in 2021, starting with 'The Octopus and the Mermaid' and 'The Clawby'.  I live in the UK (United Kingdom), primarily in London, with my 3 daughter's, 10 goldfish and Ferrero (our Siberian forest cat). I hope to develop and publish many more books with time, and I hope that they bring my readers as much joy as they brought me to produce them.
                    My illustrations are generally hand produced, and very little computer/software input is used to make the illustrations. I've always liked working with artists' materials, rather than digital methods. Real materials always feel more authentic and vibrant to me. Although when it comes down to editing things that go wrong in an illustration- I won't deny that computer programs genuinely saved my life! The number of mistakes I've been able to correct in my illustrations with a few clicks of a mouse is such a relief (thank you to the creators of the computer, internet, and my Product Design degree)! When working with illustration materials, I favour using watercolour paints, gouache, marker pens, coloured pencils and ink for a majority of my work. I draw inspiration from a multitude of different sources for my illustrations and stories- several being from everyday life and some being from pure fantasy. I enjoy weaving life lessons and morals into the storylines, so my youngest readers can learn from my stories as well as enjoy the illustrations that bring the stories to life. I like trying to use a range of different illustration styles, with each style fitting a different story scenario.
                    Although much of my time is spent in the creation of new content, I am available for illustration projects in between, and any interested parties should contact me direct using my contacts page.</p>
            </section>
            <img className="about__author" src={RaeChastain} alt="photo of rae chastain" />
        </main>
    );
};

export default About;
