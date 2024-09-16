import { useEffect, useState, useMemo, Children } from 'react';
import PropTypes from 'prop-types';
import { OneColumnPage as OneColumn } from '@pega/cosmos-react-core';
import { ConfigurableLayout } from '@pega/cosmos-react-work';
// import { registerIcon } from '@pega/cosmos-react-core';

// temp
// import * as headlineIcon from '@pega/cosmos-react-core/lib/components/Icon/icons/headline.icon';

import StyledPegaUidCatalogWrapper from './styles';

import GetNextWork from './GetNextWork.jsx';
import { getLayoutDataFromRegion } from './utils';

// temp
// registerIcon(headlineIcon);

// currently getting 'icon' from props is not supported with iconRegistry
// have to manually get icon, so can't determine a runtime for now
// so "headline" icon is hardcoded.

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export default function PegaUidCatalog(props) {
  // add back in icon when working
  // const { children, title, icon, useConfigurableLayout, getPConnect, enableGetNextWork } = props;
  const { children, title, useConfigurableLayout, getPConnect, enableGetNextWork } = props;
  const childArray = useMemo(() => {
    return Children.toArray(children);
  }, [children]);
  const layoutItemsA = useMemo(() => {
    return getLayoutDataFromRegion(childArray[0]);
  }, [childArray[0]]);

  const [list, setList] = useState();

  // temp
  const tempIcon = 'pi pi-headline';

  useEffect(() => {
    console.log('EFFECT');
    const context = getPConnect().getContextName();
    PCore.getDataPageUtils()
      .getDataAsync('D_ScheduleTrainingEventList', context)
      .then(data => {
        console.log(data);
        setList(data);
      });
  }, []);

  return (
    <StyledPegaUidCatalogWrapper>
      <OneColumn
        a={useConfigurableLayout ? <ConfigurableLayout items={layoutItemsA} /> : childArray[0]}
        title={title}
        icon={tempIcon?.replace('pi pi-', '')}
        actions={enableGetNextWork ? <GetNextWork getPConnect={getPConnect} /> : null}
      />
    </StyledPegaUidCatalogWrapper>
  );
}

PegaUidCatalog.defaultProps = {
  /* icon: '', */
  useConfigurableLayout: false
};

PegaUidCatalog.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
  /* icon: PropTypes.string, */
  useConfigurableLayout: PropTypes.bool
};
