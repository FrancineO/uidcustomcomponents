import { withKnobs } from '@storybook/addon-knobs';

import { configProps, fieldMetadata, stateProps } from './mock.stories.js';

import PegaUidCurrency from './index.jsx';

export default {
  title: 'PegaUidCurrency',
  decorators: [withKnobs],
  component: PegaUidCurrency
};

export const basePegaUidCurrency = () => {

  const props = {
    value: Number(configProps.value),
    placeholder: configProps.placeholder,
    label: configProps.label,
    helperText: configProps.helperText,
    showGroupSeparators: configProps.showGroupSeparators,
    allowDecimals: configProps.allowDecimals,
    currencyISOCode: configProps.currencyISOCode,
    alwaysShowISOCode: configProps.alwaysShowISOCode,
    hasSuggestions: configProps.hasSuggestions,
    testId: configProps.testId,
    fieldMetadata,

    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */},
        clearErrorMessages: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <PegaUidCurrency {...props} />
    </>
  );
};
