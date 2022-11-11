import { FC } from "react";
import styles from "./CardOtherBooks.module.scss";
import Image from "../../Image/Image";
import Paragraph from "../../Text/Paragraph/Paragraph";

export interface CardOtherBooksProps
  extends React.HTMLAttributes<HTMLDivElement> {
  key: string;
  imageName: string;
  name: string;
  bookStatus: string;
}

const CardOtherBooks: FC<CardOtherBooksProps> = (props) => {
  return (
    <div key={props.key} className={styles.content__book}>
      <Image imageName={props.imageName} />
      <div className={styles.content__bookStatus}>
        <Paragraph size="large" weight={500}>
          {props.name}
        </Paragraph>
        <Paragraph weight={500}>{props.bookStatus}</Paragraph>
      </div>
    </div>
  );
};

export default CardOtherBooks;
