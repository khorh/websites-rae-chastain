import { FC } from "react";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Text/Heading/Heading";

const BookDetailsHeader: FC = () => {
  return (
    <header>
      <Heading type="h1" font="primary" marginBottom={24}>
        The Clawby
      </Heading>
      <Button type="primary">Order</Button>
    </header>
  );
};

export default BookDetailsHeader;
