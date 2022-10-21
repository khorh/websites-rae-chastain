import { FC } from "react";
import styles from "./Blog.module.scss";
import Image from "../../components/Image/Image";
import Icon from "../../components/Icon/Icon";
import Heading from "../../components/Text/Heading/Heading";
import Paragraph from "../../components/Text/Paragraph/Paragraph";
import DataBlog from "../../assets/data/DataBlog.mocked";
import { skipPartiallyEmittedExpressions } from "typescript";

const Blog: FC = () => {
  // Method to sort blog posts
  const sortPosts = DataBlog.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  );

  // Method to display blog posts
  const displayPosts = sortPosts.map((display) => {
    return (
      <div className={styles.content}>
        <Image name={display.imageName} />
        <div className={styles.content__dateShareText}>
          <div className={styles.content__dateShare}>
            <Paragraph>{display.datePosted}</Paragraph>
            <Icon name="share" size="small" />
          </div>
          <div>
            <Heading type="h2" font="primary" marginBottom={16}>
              {display.name}
            </Heading>
            <div className={styles.content__text}>
              <Paragraph size="large">{display.description}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Heading type="h1" font="primary" marginBottom={24}>
            Blog
          </Heading>
        </div>
      </header>
      <main className={styles.main}>{displayPosts}</main>
    </>
  );
};

export default Blog;
