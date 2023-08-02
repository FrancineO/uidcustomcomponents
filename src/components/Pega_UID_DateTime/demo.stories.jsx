import { withKnobs } from '@storybook/addon-knobs';
import { configProps, stateProps } from './mock.stories';
import PegaUidDateTime from './index.jsx';

export default {
  title: 'PegaUidDateTime',
  decorators: [withKnobs],
  component: PegaUidDateTime
};

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getEnvironmentInfo = () => {
  return {
    getTimeZone: () => {
      return '';
    }
  };
};

export const basePegaUidDateTime = () => {
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
        acceptSuggestion: () => {/* nothing */},
        clearErrorMessages: () => {/* nothing */}
      };
    },
    value: configProps.value,
    validatemessage: configProps.validatemessage,
    label: configProps.label,
    hideLabel: configProps.hideLabel,
    helperText: configProps.helperText,
    withSeconds: configProps.withSeconds,
    nextYearRange: configProps.nextYearRange,
    previousYearRange: configProps.previousYearRange,
    showWeekNumber: configProps.showWeekNumber,
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
      <PegaUidDateTime {...props} />
    </>
  );
};
