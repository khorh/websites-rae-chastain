import { FC } from "react";
import styles from "./BooksMain.module.scss";
import Divider from "../../../components/Divider/Divider";
import Image from "../../../components/Image/Image";
import Paragraph from "../../../components/Text/Paragraph/Paragraph";
import DataBooks from "../../../assets/data/DataBooks.mocked";

const BooksMain: FC = () => {
  // Method to filter other books
  const filteredOtherBooks = DataBooks.filter(
    (filter) => filter.heroBook === false
  );

  // Method to sort other books starting from the latest release date
  const sortOtherBooks = filteredOtherBooks.sort(
    (a, b) =>
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );

  // Method to display other books
  const displayOtherBooks = sortOtherBooks.map((display) => {
    // Method to show status of other books i.e. coming soon or out now
    const dateNow = Date.now();
    const bookReleaseDate = new Date(display.releaseDate).getTime();
    const bookStatus = bookReleaseDate > dateNow ? "Coming soon!" : "Out now!";
    return (
      <div key={display.id} className={styles.content__book}>
        <Image name={display.imageName} />
        <div className={styles.content__bookStatus}>
          <Paragraph size="large" weight={500}>
            {display.bookName}
          </Paragraph>
          <Paragraph weight={500}>{bookStatus}</Paragraph>
        </div>
      </div>
    );
  });

  return (
    <main className={styles.main}>
      <Divider marginBottom={32} />
      <div className={styles.content}>{displayOtherBooks}</div>
    </main>
  );
};

export default BooksMain;
