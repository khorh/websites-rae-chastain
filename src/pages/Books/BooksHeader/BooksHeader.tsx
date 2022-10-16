import { FC } from "react";
import styles from "./BooksHeader.module.scss";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Text/Heading/Heading";
import Image from "../../../components/Image/Image";
import Paragraph from "../../../components/Text/Paragraph/Paragraph";
import DataBooks from "../../../assets/data/DataBooks.mocked";

const BooksHeader: FC = () => {
  // Method to filter hero book
  const filteredHeroBook = DataBooks.filter(
    (filter) => filter.heroBook === true
  );

  // Method to display hero book
  const displayHeroBook = filteredHeroBook.map((display) => (
    <div key={display.id} className={styles.content}>
      <Image name={display.imageName} />
      <div className={styles.content__text}>
        <Heading type="h2" font="secondary" marginBottom={16}>
          {display.bookName}
        </Heading>
        <Paragraph size="large" marginBottom={24}>
          {display.shortDescription}
        </Paragraph>
        <div>
          <Button type="primary" marginRight={16}>
            Order
          </Button>
          <Button type="secondary">Details</Button>
        </div>
      </div>
    </div>
  ));

  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        <Heading type="h1" font="primary" marginBottom={24}>
          Books
        </Heading>
      </div>
      {displayHeroBook}
    </header>
  );
};

export default BooksHeader;
