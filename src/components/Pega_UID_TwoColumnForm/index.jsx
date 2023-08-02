import { Grid, Flex } from '@pega/cosmos-react-core';
import PropTypes from 'prop-types';

import StyledPegaUidTwoColumnFormWrapper from './styles';


// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export default function PegaUidTwoColumnForm(props) {


  const { children } = props;

  const numRegions = children?.length;
  const gridRepeat = "repeat(".concat(numRegions).concat(", 1fr)");
  const gridContainer = {"colGap" : 1};
  gridContainer.cols = gridRepeat;
  gridContainer.alignItems = 'start';

  const flexContainer = {direction: 'column'};
  flexContainer.gap = 2;

  return (
    <StyledPegaUidTwoColumnFormWrapper>
      <Grid container={gridContainer}>
       {children.map((child, i) => (
        <Flex container={flexContainer} key={`r-${i + 1}`}>
        {child}
        </Flex>
       ))}
      </Grid>
    </StyledPegaUidTwoColumnFormWrapper>
  );

}

PegaUidTwoColumnForm.defaultProps = {
  children: []
};

PegaUidTwoColumnForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
