import "./Text.scss";

interface TextProps {
    /**
    * What is the type?
    */
    type?: "h1" | "h2" | "h3" | "h4" | "p";
    /**
     * Is the font family primary?
     */
    primary?: boolean;
}

export const Heading = ({
    type = "h1",
    primary = true,
    ...props
}: TextProps) => {
    const selection = primary ? "font__primary" : "font__secondary";  

    switch (type) {
        case "h1": 
            return <h1 className={selection} {...props}></h1>;
        case "h2": 
            return <h2 className={selection} {...props}></h2>;
        case "h3": 
            return <h3 className={selection} {...props}></h3>;
        case "h4": 
            return <h4 className={selection} {...props}></h4>;
        case "p": 
            return <p className={selection} {...props}></p>;
    };
};
