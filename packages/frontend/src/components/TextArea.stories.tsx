import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TextArea from "./TextArea";

const meta = {
  args: {
    onChange: fn(),
  },

  component: TextArea,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: "This is some text content",
  },
};
