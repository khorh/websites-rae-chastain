import { ComponentMeta, ComponentStory } from "@storybook/react";
import Paragraph, { ParagraphProps } from "./Paragraph";

export default {
  title: "Components/Text/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Paragraphs: ComponentStory<typeof Paragraph> = (
  args: ParagraphProps
) => {
  return (
    <>
      <Paragraph size="medium" weight={400}>
        Paragraph: Medium 400
      </Paragraph>
      <Paragraph size="medium" weight={500}>
        Paragraph: Medium 500
      </Paragraph>
      <Paragraph size="large" weight={400}>
        Paragraph: Large 400
      </Paragraph>
      <Paragraph size="large" weight={500}>
        Paragraph: Large 500
      </Paragraph>
    </>
  );
};
