import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardBlogList, { CardBlogListProps } from "./CardBlogList";
import DataBlog from "../../../assets/data/DataBlog.mocked";

export default {
  title: "Components/Card",
  component: CardBlogList,
} as ComponentMeta<typeof CardBlogList>;

export const BlogList: ComponentStory<typeof CardBlogList> = (
  args: CardBlogListProps
) => {
  // Method to filter on a blog
  const filteredOnABlog = DataBlog.filter(
    (filter) => filter.blogId === "blog001"
  );

  console.log(filteredOnABlog);

  // Method to display the blog
  const displayABlog = filteredOnABlog.map((display) => {
    return (
      <CardBlogList
        blogImageName={display.blogImageName}
        blogDatePosted={display.blogDatePosted}
        blogName={display.blogName}
        blogDescription={display.blogDescription}
      />
    );
  });

  return <div>{displayABlog}</div>;
};
