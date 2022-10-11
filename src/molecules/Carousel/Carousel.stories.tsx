import { ComponentMeta, ComponentStory } from "@storybook/react";
import Carousel from "./Carousel";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Carousels: ComponentStory<typeof Carousel> = () => <Carousel />;
