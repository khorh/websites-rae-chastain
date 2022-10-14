import { FC } from "react";
import styles from "./BooksMain.module.scss";
import Divider from "../../components/Divider/Divider";

const BooksMain: FC = () => {
  return (
    <main className={styles.main}>
      <Divider marginBottom={32} />
    </main>
  );
};

export default BooksMain;
