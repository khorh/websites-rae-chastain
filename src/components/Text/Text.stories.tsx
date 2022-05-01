import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./Text";

export default {
    title: "Components/Text",
    component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
    type: "h1",
    primary: true,
    text: "Lorem ipsum..."
};

export const Heading2 = Template.bind({});
Heading2.args = {
    type: "h2",
    primary: true,
    text: "Lorem ipsum..."
};

export const Heading3 = Template.bind({});
Heading3.args = {
    type: "h3",
    primary: true,
    text: "Lorem ipsum..."
};

export const Heading4 = Template.bind({});
Heading4.args = {
    type: "h4",
    primary: true,
    text: "Lorem ipsum..."
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    type: "p",
    text: "Lorem ipsum..."
};

export const Footer = Template.bind({});
Footer.args = {
    type: "footer",
    text: "Lorem ipsum..."
};
