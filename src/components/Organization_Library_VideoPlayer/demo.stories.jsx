import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import VideoPlayer from './index';

export default {
  title: 'VideoPlayer',
  decorators: [withKnobs],
  component: VideoPlayer
};

export const baseVideoPlayer = () => {
  const [value, setValue] = useState('test value');

  const props = {
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, value) => {
              setValue(value);
            }
          };
        },
        getStateProps: () => {
          return { value: '.name' };
        }
      };
    },
    value: text('src', 'https://www.youtube.com/watch?v=EtG5IuNGYSk'),
    placeholder: text('Placeholder', 'Test placeholder'),
    disabled: boolean('Disabled', false),
    readOnly: boolean('Disabled', false),
    required: boolean('Disabled', false),
    label: text('Label', 'Video player label'),
    testId: text('Test id', 'video-12344566')
  };

  return <VideoPlayer {...props} />;
};
