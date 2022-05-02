import "./Icon.scss";
import Box from "../../assets/icons/box.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";

interface IconProps {
    /**
    * What is the icon's name?
    */
    name?: string;
};

const Icon = ({
    name, 
    ...props
} : IconProps) => {
    const iconList = [
        {
            name: "box",
            href: "",
            src: Box,
            alt: "box icon"
        },
        {
            name: "facebook",
            href: "https://www.facebook.com/readchastain",
            src: Facebook,
            alt: "facebook logo"
        },
        {
            name: "instagram",
            href: "https://www.instagram.com/readchastain",
            src: Instagram,
            alt: "instagram logo"
        }
    ];

    const iconFilteredName = iconList.filter(selection => selection.name === name);

    const iconDisplay = iconFilteredName.map(icon => {
        return (
            <a key={icon.name} className="icon__container" href={icon.href} target="_blank" rel="noreferrer" {...props}>
                <img className="icon__image" src={icon.src} alt={icon.alt} />
            </a>
        );
    });

    return (
        <>
            {iconDisplay}
        </>
    )
};

export default Icon;
