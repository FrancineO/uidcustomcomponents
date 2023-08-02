import { withKnobs } from '@storybook/addon-knobs';

import PegaUidEmail from './index.jsx';

import { stateProps, configProps, fieldMetadata } from './mock.stories';

export default {
  title: 'PegaUidEmail',
  decorators: [withKnobs],
  component: PegaUidEmail
};

export const basePegaUidEmail = () => {

  const props = {
    value: configProps.value,
    label: configProps.label,
    placeholder: configProps.placeholder,
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
      <PegaUidEmail {...props} />
    </>
  );
};
