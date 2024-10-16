import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PostForm from "./PostForm";

const meta = {
  args: {
    onSubmit: fn(),
  },

  component: PostForm,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PostForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
