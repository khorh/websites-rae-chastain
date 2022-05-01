import { ComponentStory, ComponentMeta } from "@storybook/react";

import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: "A divider separates two pieces of content.",
      },
    },
  },
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = () => <Divider />
