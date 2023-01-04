import { withKnobs } from '@storybook/addon-knobs';

import PegaUidStatusBadge from './index';

export default {
  title: 'PegaUidStatusBadge',
  decorators: [withKnobs],
  component: PegaUidStatusBadge
};

export const successStatusBadge = () => {
  const props = {
    labelText: 'Success',
    variant: 'success'
  };

  return (
    <>
      <PegaUidStatusBadge {...props} />
    </>
  );
};

export const urgentStatusBadge = () => {
  const props = {
    labelText: 'Urgent',
    variant: 'urgent'
  };

  return (
    <>
      <PegaUidStatusBadge {...props} />
    </>
  );
};

export const warningStatusBadge = () => {
  const props = {
    labelText: 'Warn',
    variant: 'warn'
  };

  return (
    <>
      <PegaUidStatusBadge {...props} />
    </>
  );
};

export const pendingStatusBadge = () => {
  const props = {
    labelText: 'pending',
    variant: 'pending'
  };

  return (
    <>
      <PegaUidStatusBadge {...props} />
    </>
  );
};

export const infoStatusBadge = () => {
  const props = {
    labelText: 'info',
    variant: 'info'
  };

  return (
    <>
      <PegaUidStatusBadge {...props} />
    </>
  );
};
