import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Buttons: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <>
      <Button type="primary" marginRight={16}>
        Button
      </Button>
      <Button type="secondary">Button</Button>
    </>
  );
};
