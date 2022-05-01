import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading } from "./Text";

export default {
    title: "Components/Text/Heading",
    component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "h1",
};
