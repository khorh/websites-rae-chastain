import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "./Image";

export default {
  title: "Components/Image/Hero",
  component: Image,
  parameters: {
    docs: {
      description: {
        component: "A hero image represents the contents of a page.",
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const WomanDesigning = Template.bind({});
WomanDesigning.args = {
  imageName: "womanDesigning",
};

export const PaperPlane = Template.bind({});
PaperPlane.args = {
  imageName: "paperPlane",
};
