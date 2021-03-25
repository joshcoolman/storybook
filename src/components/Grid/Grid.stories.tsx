import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Grid, { GridProps } from ".";
import Box from "../Box";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    cols: { control: "number" },
    gap: { control: "number" },
  },
} as Meta;

const Template: Story<GridProps> = (args) => {
  const props = {
    m: 0,
    p: 0,
    center: true,
  };
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Grid {...args}>
      {items.map((item) => {
        return (
          <Box key={item} {...props}>
            <h1>{item}</h1>
          </Box>
        );
      })}
    </Grid>
  );
};

export const Props = Template.bind({});
Props.args = {
  cols: 3,
  gap: 5,
  pad: 10,
};
