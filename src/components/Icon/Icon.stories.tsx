import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
  title: "Components/Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const iconGalleryStorybookStyling = {
  display: "flex",
  flexFlow: "wrap",
};

const iconStorybookStyling = {
  margin: "8px",
  border: "1px solid #bebebe",
  borderRadius: "4px",
  padding: "16px",
  width: "144px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Icons: ComponentStory<typeof Icon> = (args: IconProps) => {
  return (
    <div style={iconGalleryStorybookStyling as React.CSSProperties}>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="arrow-left" />
        <p>arrow-left</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="arrow-right" />
        <p>arrow-right</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="dot" />
        <p>dot</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="facebook" />
        <p>facebook</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="instagram" />
        <p>instagram</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="list" />
        <p>list</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="pause" />
        <p>pause</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="play" />
        <p>play</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="share" />
        <p>share</p>
      </div>
      <div style={iconStorybookStyling as React.CSSProperties}>
        <Icon name="x-circle" />
        <p>x-circle</p>
      </div>
    </div>
  );
};
