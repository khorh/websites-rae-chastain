import "./Image.scss";
import WomanDesigning from "../../assets/images/woman-designing.jpg";
import PaperPlane from "../../assets/images/paper-plane.jpg";

interface ImageProps {
    /**
    * What is the image's name?
    */
    name?: string,
}

const Image = ({
    name,
    ...props
} : ImageProps) => {
    const ImageList = [
        {
            name: "womanDesigning",
            src: WomanDesigning,
            alt: "woman designing"
        },
        {
            name: "paperPlane",
            src: PaperPlane,
            alt: "people throwing paper plane"
        }
    ];

    const ImageFilteredName = ImageList.filter(selection => selection.name === name);

    const ImageDisplay = ImageFilteredName.map(image => {
        return (
            <section key={image.name} className="image__container">
                <img className="image__hero" src={image.src} alt={image.alt} />
            </section>
        );
    });

    return (
        <>
            {ImageDisplay}
        </>
    );
};

export default Image;
