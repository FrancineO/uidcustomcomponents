import PropTypes from 'prop-types';
import React from 'react';
import { Label } from '@pega/cosmos-react-core';
import ReactPlayer from 'react-player';

import StyledVideoPlayerWrapper from './styles';

const VideoPlayer = props => {
  const { getPConnect, value, placeholder, disabled, readOnly, required, label } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn?.getStateProps()?.value;

  return (
    <StyledVideoPlayerWrapper>
      <Label>{label}</Label>
      <ReactPlayer url={value} />
    </StyledVideoPlayerWrapper>
  );
};

VideoPlayer.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  required: false,
  testId: null
};
VideoPlayer.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  getPConnect: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string
};

export default VideoPlayer;
