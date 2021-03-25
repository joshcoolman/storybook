import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Box, { BoxProps } from ".";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    bg: { control: "color" },
    color: { control: "color" },
    m: { control: "number" },
    p: { control: "number" },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <h1>Sample Text</h1>
    </Box>
  );
};

export const Defaults = Template.bind({});

export const Colors = Template.bind({});
Colors.args = {
  rc: true,
  bg: "tomato",
  color: "purple",
};

export const Spacing = Template.bind({});
Spacing.args = {
  rc: true,
  bg: "dodgerblue",
  color: "white",
  center: true,
  m: 10,
  p: 10,
};

export const ArraySpacing = Template.bind({});
ArraySpacing.args = {
  rc: true,
  bg: "purple",
  color: "hotpink",
  center: true,
  m: [10, 80],
  p: [0, 40, 60, 40],
};
