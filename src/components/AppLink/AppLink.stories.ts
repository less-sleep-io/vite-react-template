import type { Meta, StoryObj } from "@storybook/react-vite";

import AppLink from "./AppLink";

const meta = {
  title: "Components/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "AppLink",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    asChild: false,
    to: "/a",
    children: "AppLink",
  },
};
