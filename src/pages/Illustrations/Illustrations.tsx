import { FC } from "react";
import styles from "./Illustrations.module.scss";
import Heading from "../../components/Text/Heading/Heading";
import Image from "../../components/Image/Image";
import DataImages from "../../assets/data/DataImages.mocked";

const Illustrations: FC = () => {
  // Method to filter images with category as illustrations
  const filterImages = DataImages.filter(
    (filter) => filter.imageCategory === "illustrations"
  );

  // Method to display illustrations
  const displayIllustrations = filterImages.map((display) => {
    return (
      <div key={display.imageId} className={styles.content__brick}>
        <Image imageName={display.imageName} />
      </div>
    );
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Heading type="h1" font="primary" marginBottom={24}>
            Illustrations
          </Heading>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>{displayIllustrations}</div>
      </main>
    </>
  );
};

export default Illustrations;
