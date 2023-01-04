import PropTypes from 'prop-types';
import { Status } from '@pega/cosmos-react-core';

import StyledPegaUidStatusBadgeWrapper from './styles';

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const PegaUidStatusBadge = (props: {
  labelType: string;
  labelText: string;
  labelField: string;
  variantType: string;
  variant: string;
  variantField: string;
  value: string;
}) => {
  const { labelType, labelText, labelField, variantType, variant, variantField, value } = props;

  const statusVariant = variantType === 'static' ? variant : variantField || 'info';

  let statusText;
  switch (labelType) {
    case 'text':
      statusText = labelText;
      break;
    case 'property':
      statusText = labelField;
      break;
    case 'value':
    default:
      statusText = value;
  }

  return (
    <StyledPegaUidStatusBadgeWrapper>
      <Status variant={statusVariant}>{statusText}</Status>
    </StyledPegaUidStatusBadgeWrapper>
  );
};

PegaUidStatusBadge.defaultProps = {
  labelType: 'text',
  labelText: '',
  labelField: '',
  variantType: 'static',
  variant: 'info',
  variantField: ''
};

PegaUidStatusBadge.propTypes = {
  labelType: PropTypes.string,
  labelText: PropTypes.string,
  labelField: PropTypes.string,
  variantType: PropTypes.string,
  variant: PropTypes.string,
  variantField: PropTypes.string
};

export default PegaUidStatusBadge;
