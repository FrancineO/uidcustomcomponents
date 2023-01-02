import type { FunctionComponent } from 'react';
import { URLDisplay } from '@pega/cosmos-react-core';
import ReactPlayer from 'react-player';

import StyledMediaURLDisplay from './MediaURL.styles';
import type { MediaURLDisplayProps } from './MediaURL.types';

const MediaURLDisplay: FunctionComponent<MediaURLDisplayProps> = ({
  value,
  variant = 'player',
  testId,
  ...restProps
}) => {
  if ((!value && variant !== 'player') || variant !== 'player') {
    return <URLDisplay value={value} variant={variant} {...restProps} />;
  }

  return (
    <StyledMediaURLDisplay data-testid={testId}>
      <ReactPlayer url={value} />
    </StyledMediaURLDisplay>
  );
};

export default MediaURLDisplay;
