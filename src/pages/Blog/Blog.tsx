import { FC } from "react";
import styles from "./Blog.module.scss";
import CardBlogList from "../../components/Card/CardBlogList/CardBlogList";
import Heading from "../../components/Text/Heading/Heading";
import DataBlog from "../../assets/data/DataBlog.mocked";

const Blog: FC = () => {
  // Method to sort blog posts
  const sortPosts = DataBlog.sort(
    (a, b) =>
      new Date(b.blogDatePosted).getTime() -
      new Date(a.blogDatePosted).getTime()
  );

  // Method to display blog posts
  const displayPosts = sortPosts.map((display) => {
    return (
      <CardBlogList
        blogImageName={display.blogImageName}
        blogDatePosted={display.blogDatePosted}
        blogName={display.blogName}
        blogDescription={display.blogDescription}
      />
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
