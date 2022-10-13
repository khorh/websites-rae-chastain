import { FC } from "react";
import styles from "./BooksHeader.module.scss";
import Button from "../../components/Button/Button";
import Heading from "../../components/Text/Heading/Heading";
import Image from "../../components/Image/Image";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

const BooksHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        <Heading type="h1" font="primary" marginBottom={24}>
          Books
        </Heading>
      </div>
      <div className={styles.content}>
        <Image name="the-octopus-and-the-mermaid" />
        <div className={styles.content__text}>
          <Heading type="h2" font="secondary" marginBottom={16}>
            The Octopus and the Mermaid
          </Heading>
          <Paragraph size="large" marginBottom={24}>
            Join this enchanting story of how a lonely coconut octopus is
            befriended by a beautiful mermaid.
          </Paragraph>
          <div>
            <Button type="primary" marginRight={16}>
              Order
            </Button>
            <Button type="secondary">Details</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BooksHeader;
