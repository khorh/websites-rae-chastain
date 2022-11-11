import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardBooksOtherBook, {
  CardBooksOtherBookProps,
} from "./CardBooksOtherBook";
import DataBooks from "../../../assets/data/DataBooks.mocked";

export default {
  title: "Components/Card",
  component: CardBooksOtherBook,
} as ComponentMeta<typeof CardBooksOtherBook>;

export const BooksOtherBook: ComponentStory<typeof CardBooksOtherBook> = (
  args: CardBooksOtherBookProps
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
      <CardBooksOtherBook
        key={display.id}
        imageName={display.imageName}
        name={display.name}
        bookStatus={bookStatus}
      />
    );
  });

  return <div>{displayABook}</div>;
};
