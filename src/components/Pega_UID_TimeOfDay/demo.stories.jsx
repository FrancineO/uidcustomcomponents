import { withKnobs } from '@storybook/addon-knobs';
import { configProps, stateProps } from './mock.stories';
import PegaUidTimeOfDay from './index.jsx';

export default {
  title: 'PegaUidTimeOfDay',
  decorators: [withKnobs],
  component: PegaUidTimeOfDay
};

export const basePegaUidTimeOfDay = () => {
  const props = {
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        getValidationApi: () => {
          return {
            validate: () => {/* nothing */}
          };
        },
        getStateProps: () => {
          return stateProps;
        },
        getConfigProps: () => {
          return configProps;
        },
        ignoreSuggestion: () => {/* nothing */},
        clearErrorMessages: () => {/* nothing */}
      };
    },
    value: configProps.value,
    validatemessage: configProps.validatemessage,
    label: configProps.label,
    hideLabel: configProps.hideLabel,
    helperText: configProps.helperText,
    withSeconds: configProps.withSeconds,
    testId: configProps.testId,
    additionalProps: configProps.additionalProps,
    displayMode: configProps.displayMode,
    variant: configProps.variant,
    hasSuggestions: configProps.hasSuggestions,
    disabled: configProps.disabled,
    readOnly: configProps.readOnly,
    required: configProps.required
  };

  return (
    <>
      <PegaUidTimeOfDay {...props} />
    </>
  );
};
