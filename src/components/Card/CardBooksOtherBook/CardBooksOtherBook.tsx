import { FC } from "react";
import styles from "./CardBooksOtherBook.module.scss";
import Image from "../../Image/Image";
import Paragraph from "../../Text/Paragraph/Paragraph";

export interface CardBooksOtherBookProps
  extends React.HTMLAttributes<HTMLDivElement> {
  key: string;
  imageName: string;
  name: string;
  bookStatus: string;
}

const CardBooksOtherBook: FC<CardBooksOtherBookProps> = (props) => {
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

export default CardBooksOtherBook;
