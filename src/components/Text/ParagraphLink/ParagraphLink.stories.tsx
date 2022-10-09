import { ComponentMeta, ComponentStory } from "@storybook/react";
import ParagraphLink, { ParagraphLinkProps } from "./ParagraphLink";

export default {
  title: "Components/Text",
  component: ParagraphLink,
} as ComponentMeta<typeof ParagraphLink>;

export const ParagraphLinks: ComponentStory<typeof ParagraphLink> = (
  args: ParagraphLinkProps
) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ParagraphLink size="medium">ParagraphLink: Medium 400</ParagraphLink>
      <ParagraphLink size="medium" weight={500}>
        ParagraphLink: Medium 500
      </ParagraphLink>
      <ParagraphLink size="large">ParagraphLink: Large 400</ParagraphLink>
      <ParagraphLink size="large" weight={500}>
        ParagraphLink: Large 500
      </ParagraphLink>
      <ParagraphLink size="medium" link="https://www.google.com">
        ParagraphLink: Medium 400 with internal link
      </ParagraphLink>
      <ParagraphLink size="medium" link="https://www.google.com" external>
        ParagraphLink: Medium 400 with external link
      </ParagraphLink>
    </div>
  );
};
