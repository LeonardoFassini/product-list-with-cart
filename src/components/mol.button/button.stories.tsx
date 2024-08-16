import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./button.component";

const meta: Meta<typeof Button> = {
  component: Button
}
export default meta

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "Primary",
    text: 'Continue',
  }
}

export const AddToCart: Story = {
  args: {
    type: "AddToCart",
    text: "Add to cart"
  }
}