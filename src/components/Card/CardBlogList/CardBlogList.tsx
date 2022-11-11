import { FC } from "react";
import styles from "./CardBlogList.module.scss";
import Heading from "../../Text/Heading/Heading";
import Icon from "../../Icon/Icon";
import Image from "../../Image/Image";
import Paragraph from "../../Text/Paragraph/Paragraph";

export interface CardBlogListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  blogImageName: string;
  blogDatePosted: string;
  blogName: string;
  blogDescription: string;
}

const CardBlogList: FC<CardBlogListProps> = (props) => {
  return (
    <div className={styles.blogList}>
      <Image imageName={props.blogImageName} />
      <div className={styles.blogList__dateShareText}>
        <div className={styles.blogList__dateShare}>
          <Paragraph>{props.blogDatePosted}</Paragraph>
          <Icon name="share" size="small" />
        </div>
        <div>
          <Heading type="h2" font="primary" marginBottom={16}>
            {props.blogName}
          </Heading>
          <div className={styles.blogList__text}>
            <Paragraph size="large">{props.blogDescription}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlogList;
