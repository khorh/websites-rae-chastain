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

  console.log(filteredOtherBooks);

  // Method to display other books
  const displayOtherBooks = filteredOtherBooks.map((display) => (
    <div>
      <Image name={display.imageName} />
    </div>
  ));

  return (
    <main className={styles.main}>
      <Divider marginBottom={32} />
      {displayOtherBooks}
    </main>
  );
};

export default BooksMain;
