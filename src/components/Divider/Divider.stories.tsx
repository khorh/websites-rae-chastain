import { ComponentStory, ComponentMeta } from "@storybook/react";

import Divider from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Dividers: ComponentStory<typeof Divider> = () => <Divider />;
