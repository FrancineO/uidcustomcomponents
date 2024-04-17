//This is a test
import { useEffect, useState, Fragment } from 'react';
import {
  Flex,
  Grid,
  Text,
  Icon,
  registerIcon,
  ExpandCollapse,
  Button
} from '@pega/cosmos-react-core';
import * as check from '@pega/cosmos-react-core/lib/components/Icon/icons/check.icon';
import * as warnSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/warn-solid.icon';
import * as caretRight from '@pega/cosmos-react-core/lib/components/Icon/icons/caret-right.icon';
import * as caretDown from '@pega/cosmos-react-core/lib/components/Icon/icons/caret-down.icon';
import * as pencilSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/pencil-solid.icon';
import PropTypes from 'prop-types';

//this is a comment

import StyledPegaUidAdvancedFormWrapper from './styles';

// Duplicated runtime code from Constellation Design System Component
//test
// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export default function PegaUidAdvancedForm(props) {
  registerIcon(check);
  registerIcon(warnSolid);
  registerIcon(caretRight);
  registerIcon(caretDown);
  registerIcon(pencilSolid);
  const {
    getPConnect,
    displayStatus,
    statusField,
    primaryHeaderType,
    primaryHeaderText,
    primaryHeaderField,
    primaryVariant,
    secondaryHeaderType,
    secondaryHeaderText,
    secondaryHeaderField,
    mainFormAction,
    localAction,
    localActionType,
    modalHeader,
    buttonVariant,
    buttonLabel,
    hideContent,
    defaultCollapsibleBehavior,
    numberOfColumns,
    children
  } = props;

  const [collapsed, setCollapsed] = useState(defaultCollapsibleBehavior === 'Collapsed');

  const [formElms, setFormElms] = useState([]);

  const openActionModal = () => {
    getPConnect().getActionsApi().openLocalAction(localAction, {
      type: localActionType,
      containerName: 'modal',
      name: modalHeader
    });
  };

  useEffect(() => {
    const elms = [];
    const region = children[0] ? children[0].props.getPConnect() : null;
    if (region?.getChildren()) {
      region.getChildren().map(child => {
        child.getPConnect().setInheritedProp('readOnly', true);
        elms.push(child.getPConnect().getComponent());
      });
      setFormElms(elms);
    }
  }, [children[0]]);

  let colsValue;
  switch (numberOfColumns) {
    case 'Two':
      colsValue = 2;
      break;
    case 'Three':
      colsValue = 3;
      break;
    default:
    case 'One':
      colsValue = 1;
      break;
  }

  return (
    <StyledPegaUidAdvancedFormWrapper className='advanced-form-wrapper'>
      <Flex
        className='status-form-header'
        container={{ justify: 'space-between', align: 'center' }}
      >
        <Flex
          container={{ direction: 'row', justify: 'start', align: 'center' }}
          className='status-form-header-left'
        >
          {displayStatus &&
            (statusField ? (
              <Icon style={{ height: '1rem', width: '1rem' }} name='check' aria-label='Success' />
            ) : (
              <Icon
                style={{ height: '1rem', width: '1rem' }}
                name='warn-solid'
                aria-label='Warning'
              />
            ))}
          <Flex
            className='status-form-header-text'
            container={{ direction: 'row', justify: 'start', align: 'center' }}
          >
            {primaryHeaderType && (
              <Text
                variant={
                  primaryVariant === 'paragraph' || primaryVariant === 'bold'
                    ? 'primary'
                    : primaryVariant
                }
                className={primaryVariant === 'bold' ? 'bold-header' : ''}
              >
                {primaryHeaderType === 'property' ? primaryHeaderField : primaryHeaderText}
              </Text>
            )}
            {secondaryHeaderType && (
              <Text variant='primary'>
                {secondaryHeaderType === 'property' ? secondaryHeaderField : secondaryHeaderText}
              </Text>
            )}
          </Flex>
        </Flex>
        {mainFormAction === 'collapsibleMode' ? (
          <Button
            variant='text'
            label={collapsed ? 'Expand' : 'Collapse'}
            icon
            compact={false}
            onClick={() => setCollapsed(curState => !curState)}
          >
            <Icon name={collapsed ? 'caret-right' : 'caret-down'} />
          </Button>
        ) : (
          mainFormAction === 'buttonMode' && (
            <Button
              variant={buttonVariant}
              label={buttonLabel}
              compact={false}
              onClick={openActionModal}
            >
              {buttonLabel}
            </Button>
          )
        )}
      </Flex>
      {(!hideContent || mainFormAction === 'collapsibleMode') && (
        <ExpandCollapse dimension='height' collapsed={collapsed} nullWhenCollapsed>
          <Grid
            container={{
              cols: `repeat(${colsValue}, 1fr)`,
              colGap: 2,
              rowGap: 1
            }}
            className='status-form-content'
          >
            {formElms.map((field, index) => (
              <Fragment key={index}>{field}</Fragment>
            ))}
          </Grid>
        </ExpandCollapse>
      )}
    </StyledPegaUidAdvancedFormWrapper>
  );
}

PegaUidAdvancedForm.defaultProps = {
  displayStatus: false,
  primaryHeaderType: null,
  primaryHeaderText: '',
  primaryHeaderField: null,
  primaryVariant: 'h1',
  secondaryHeaderType: null,
  secondaryHeaderText: '',
  secondaryHeaderField: null,
  mainFormAction: 'none',
  buttonVariant: 'Simple',
  buttonLabel: '',
  hideContent: false,
  defaultCollapsibleBehavior: 'Expanded',
  numberOfColumns: 'One'
};

PegaUidAdvancedForm.propTypes = {
  getPConnect: PropTypes.func.isRequired,
  displayStatus: PropTypes.bool,
  statusField: PropTypes.string,
  primaryHeaderType: PropTypes.string,
  primaryHeaderText: PropTypes.string,
  primaryHeaderField: PropTypes.string,
  primaryVariant: PropTypes.string,
  secondaryHeaderType: PropTypes.string,
  secondaryHeaderText: PropTypes.string,
  secondaryHeaderField: PropTypes.string,
  mainFormAction: PropTypes.string,
  localAction: PropTypes.string,
  localActionType: PropTypes.string,
  modalHeader: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonLabel: PropTypes.string,
  hideContent: PropTypes.bool,
  defaultCollapsibleBehavior: PropTypes.string,
  numberOfColumns: PropTypes.string,
  children: PropTypes.array
};
