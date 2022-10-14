import { FC } from "react";
import styles from "./Image.module.scss";
import ImagesData from "../../assets/data/ImagesData.mocked";

interface ImageProps {
  /**
   * What is the image's name?
   */
  name: string;
}

const Image: FC<ImageProps> = (props) => {
  // Method to filter the image
  const FilteredImage = ImagesData.filter(
    (filter) => filter.name === props.name
  );

  // Method to display the image
  const DisplayImage = FilteredImage.map((display) => {
    return (
      <img className={styles.books__hero} src={display.src} alt={display.alt} />
    );
  });

  return <>{DisplayImage}</>;
};

export default Image;
