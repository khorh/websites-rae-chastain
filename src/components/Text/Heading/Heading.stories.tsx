import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Components/Text",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Headings: ComponentStory<typeof Heading> = (
  args: HeadingProps
) => {
  return (
    <>
      <Heading type="h1" font="primary" marginBottom={16}>
        H1: Primary font
      </Heading>
      <Heading type="h2" font="primary" marginBottom={16}>
        H2: Primary font
      </Heading>
      <Heading type="h1" font="secondary" marginBottom={16}>
        H1: Secondary font
      </Heading>
      <Heading type="h2" font="secondary" marginBottom={16}>
        H2: Secondary font
      </Heading>
    </>
  );
};
