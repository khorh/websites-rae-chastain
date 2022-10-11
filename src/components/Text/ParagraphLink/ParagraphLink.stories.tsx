import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import ParagraphLink, { ParagraphLinkProps } from "./ParagraphLink";

export default {
  title: "Components/Text",
  component: ParagraphLink,
} as ComponentMeta<typeof ParagraphLink>;

const paragraphLinkStorybookStyling = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
};

export const ParagraphLinks: ComponentStory<typeof ParagraphLink> = (
  args: ParagraphLinkProps
) => {
  return (
    <>
      <div style={paragraphLinkStorybookStyling as React.CSSProperties}>
        <ParagraphLink>ParagraphLink: Medium 400</ParagraphLink>
        <ParagraphLink weight={500}>ParagraphLink: Medium 500</ParagraphLink>
        <ParagraphLink size="large">ParagraphLink: Large 400</ParagraphLink>
        <ParagraphLink size="large" weight={500}>
          ParagraphLink: Large 500
        </ParagraphLink>
      </div>
      <div style={paragraphLinkStorybookStyling as React.CSSProperties}>
        <ParagraphLink link="https://www.google.com">
          ParagraphLink: Medium 400 with internal link
        </ParagraphLink>
        <ParagraphLink link="https://www.google.com" external>
          ParagraphLink: Medium 400 with external link
        </ParagraphLink>
      </div>
      <div style={paragraphLinkStorybookStyling as React.CSSProperties}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          venenatis ex sit amet sapien interdum molestie. Etiam ut lorem quis
          odio tincidunt molestie sed eu nibh. Etiam nec aliquam arcu, commodo
          facilisis mi. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. In hendrerit metus et ipsum
          mollis eleifend. Aliquam sed quam consectetur, euismod massa vitae,
          varius ex. Quisque lacinia magna vel sem maximus, finibus posuere
          lectus imperdiet. Mauris molestie mauris sit amet ante tempor, in
          consequat nulla convallis. Sed interdum ex in nisi elementum, et
          pretium lacus auctor.{" "}
          <ParagraphLink link="https://www.google.com" external>
            ParagraphLink: Medium 400 with external link
          </ParagraphLink>
        </Paragraph>
      </div>
    </>
  );
};
