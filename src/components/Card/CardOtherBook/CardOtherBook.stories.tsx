import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardOtherBook, { CardOtherBookProps } from "./CardOtherBook";
import DataBooks from "../../../assets/data/DataBooks.mocked";

export default {
  title: "Components/Card",
  component: CardOtherBook,
} as ComponentMeta<typeof CardOtherBook>;

export const CardOtherBooks: ComponentStory<typeof CardOtherBook> = (
  args: CardOtherBookProps
) => {
  // Method to filter a book
  const filteredOnABook = DataBooks.filter(
    (filter) => filter.name === "The Clawby"
  );

  // Method to display the book
  const displayABook = filteredOnABook.map((display) => {
    const dateNow = Date.now();
    const bookReleaseDate = new Date(display.releaseDate).getTime();
    const bookStatus = bookReleaseDate > dateNow ? "Coming soon!" : "Out now!";
    return (
      <CardOtherBook
        key={display.id}
        imageName={display.imageName}
        name={display.name}
        bookStatus={bookStatus}
      />
    );
  });

  return <div>{displayABook}</div>;
};
