import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "An icon is a compact symbol that represents a discrete object, action, or idea.",
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Example = Template.bind({});
Example.args = {
    name: "box"
}

export const Facebook = Template.bind({});
Facebook.args = {
    name: "facebook"
};

export const Instagram = Template.bind({});
Instagram.args = {
    name: "instagram"
};
