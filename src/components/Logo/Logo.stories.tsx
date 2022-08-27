import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";

export default {
    title: "Components/Logo",
    component: Logo,
} as ComponentMeta<typeof Logo>;

export const RaeChastain: ComponentStory<typeof Logo> = () => <Logo />
