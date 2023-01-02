import type { Meta, Story } from '@storybook/react';

import MediaURLInput from './MediaURLInput';
import MediaURLDisplay from './MediaURLDisplay';

export default {
  title: 'MediaURL',
  parameters: {
    layout: 'centered'
  }
} as Meta;

export const InputMode: Story = () => {
  return <MediaURLInput label='Media src url' />;
};

export const DisplayMode: Story = () => {
  return <MediaURLDisplay value='https://youtu.be/BxogmCLpy0w' />;
};
