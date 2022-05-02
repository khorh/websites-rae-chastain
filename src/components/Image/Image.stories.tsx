import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageHeroAbout } from "./Image";

export default {
  title: "Components/Image/Hero",
  component: ImageHeroAbout,
  parameters: {
    docs: {
      description: {
        component: "A hero image represents the contents of a page.",
      },
    },
  },
} as ComponentMeta<typeof ImageHeroAbout>;

export const Default: ComponentStory<typeof ImageHeroAbout> = () => <ImageHeroAbout />
