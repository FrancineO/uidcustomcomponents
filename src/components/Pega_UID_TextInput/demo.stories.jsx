import { withKnobs } from '@storybook/addon-knobs';

import PegaUidTextInput from './index.jsx';

import { stateProps, fieldMetadata, configProps } from './mock.stories';

export default {
  title: 'PegaUidTextInput',
  decorators: [withKnobs],
  component: PegaUidTextInput
};

export const basePegaUidTextInput = () => {

  const props = {
    value: configProps.value,
    placeholder: configProps.placeholder,
    label: configProps.label,
    helperText: configProps.helperText,
    testId: configProps.testId,
    hasSuggestions: configProps.hasSuggestions,
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
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <PegaUidTextInput {...props} />
    </>
  );
};
