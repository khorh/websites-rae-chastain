import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavMenuLink, { NavMenuLinkProps } from "./NavMenuLink";

export default {
  title: "Components/Nav",
  component: NavMenuLink,
} as ComponentMeta<typeof NavMenuLink>;

export const NavMenuLinks: ComponentStory<typeof NavMenuLink> = (
  args: NavMenuLinkProps
) => {
  return (
    <>
      <NavMenuLink key="hello" id="hello">
        Hello
      </NavMenuLink>
    </>
  );
};
