import { FC } from "react";
import styles from "./Blog.module.scss";
import Heading from "../../components/Text/Heading/Heading";
import DataBlog from "../../assets/data/DataBlog.mocked";
import Image from "../../components/Image/Image";
import Icon from "../../components/Icon/Icon";
import Paragraph from "../../components/Text/Paragraph/Paragraph";

const Blog: FC = () => {
  // Method to display blog posts
  const displayBlogs = DataBlog.map((display) => {
    return (
      <div className={styles.content}>
        <Image name={display.imageName} />
        <div>
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
      <main className={styles.main}>{displayBlogs}</main>
    </>
  );
};

export default Blog;
