import type { Meta, StoryObj } from '@storybook/react';

import { PostSummary } from './PostSummary';

const meta = {
  title: 'PostSummary',
  component: PostSummary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PostSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
