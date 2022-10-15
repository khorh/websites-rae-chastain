import { FC } from "react";
import styles from "./BooksMain.module.scss";
import Divider from "../../components/Divider/Divider";
import Image from "../../components/Image/Image";
import DataBooks from "../../assets/data/DataBooks.mocked";

const BooksMain: FC = () => {
  // Method to filter other books
  const filteredOtherBooks = DataBooks.filter(
    (filter) => filter.heroBook === false
  );

  // Method to sort other books starting from the latest release date
  const sortOtherBooks = filteredOtherBooks.sort(
    (a: any, b: any) =>
      new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
  );

  // Method to display other books
  const displayOtherBooks = sortOtherBooks.map((display) => (
    <div className={styles.content__book}>
      <Image name={display.imageName} />
    </div>
  ));

  return (
    <main className={styles.main}>
      <Divider marginBottom={32} />
      <div className={styles.content}>{displayOtherBooks}</div>
    </main>
  );
};

export default BooksMain;
