import { withKnobs } from '@storybook/addon-knobs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import PegaUidStatusBadge from './index';

export default {
  title: 'PegaUidStatusBadge',
  decorators: [withKnobs],
  component: PegaUidStatusBadge,
  args: {
    labelText: 'Label',
    variant: 'info'
  },
  argTypes: {
    variant: {
      options: ['info', 'success', 'urgent', 'warn', 'pending'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof PegaUidStatusBadge>;

const Template: ComponentStory<typeof PegaUidStatusBadge> = args => {
  return <PegaUidStatusBadge {...args} />;
};

export const infoStatusBadge = Template.bind({});
infoStatusBadge.args = { ...Template.args, labelText: 'info', variant: 'info' };

export const successStatusBadge = Template.bind({});
successStatusBadge.args = { ...Template.args, labelText: 'Success', variant: 'success' };

export const urgentStatusBadge = Template.bind({});
urgentStatusBadge.args = { ...Template.args, labelText: 'Urgent', variant: 'urgent' };

export const warningStatusBadge = Template.bind({});
warningStatusBadge.args = { ...Template.args, labelText: 'Warning', variant: 'warn' };

export const pendingStatusBadge = Template.bind({});
pendingStatusBadge.args = { ...Template.args, labelText: 'pending', variant: 'pending' };
