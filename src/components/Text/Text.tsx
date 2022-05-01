import "./Text.scss";

interface TextProps {
    /**
    * What is the type?
    */
    type?: "h1" | "h2" | "h3" | "h4" | "p" | "footer";
    /**
     * Is the font family primary?
     */
    primary?: boolean;
    /**
     * What is the text?
     */
     text?: string;
}

const Text = ({
    type = "h1",
    primary = true,
    text = "Lorem ipsum...",
    ...props
}: TextProps) => {
    const selection = primary ? "font__primary" : "font__secondary";  

    switch (type) {
        case "h1": 
            return <h1 className={selection} {...props}>{text}</h1>;
        case "h2": 
            return <h2 className={selection} {...props}>{text}</h2>;
        case "h3": 
            return <h3 className={selection} {...props}>{text}</h3>;
        case "h4": 
            return <h4 className={selection} {...props}>{text}</h4>;
        case "p": 
            return <p className={selection} {...props}>{text}</p>;
        case "footer":
            return <p className="footer" {...props}>{text}</p>;
    };
};

export default Text;
