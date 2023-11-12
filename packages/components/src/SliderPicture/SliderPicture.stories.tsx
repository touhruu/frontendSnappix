import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './SliderPicture';

const meta = {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    arrPicture: [
      'https://gamefans.ru/uploads/posts/2022-09/tower-of-fantasy-information-ruin-a-01.jpg',
      'https://i.pinimg.com/564x/7b/1c/2a/7b1c2a4c1c63384320214d77f0efe746.jpg',
      'http://squarefaction.ru/files/game/17000/cover/tower-of-fantasy_f14cf069.jpg',
      'http://squarefaction.ru/files/game/17000/gallery/20220427150230_1a79b49f.jpg',
      'http://squarefaction.ru/files/game/17000/gallery/20220427150221_a41c3b5d.jpg',
    ],
  },
};
