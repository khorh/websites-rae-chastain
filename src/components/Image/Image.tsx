import { FC } from "react";
import DataImages from "../../assets/data/DataImages.mocked";

interface ImageProps {
  /**
   * What is the image's name?
   */
  imageName: string;
}

const Image: FC<ImageProps> = (props) => {
  // Method to filter the image
  const FilteredImage = DataImages.filter(
    (filter) => filter.imageName === props.imageName
  );

  // Method to display the image
  const DisplayImage = FilteredImage.map((display) => {
    return <img key={display.imageId} src={display.imageSrc} alt={display.imageAlt} />;
  });

  return <>{DisplayImage}</>;
};

export default Image;
