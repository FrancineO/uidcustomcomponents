import { withKnobs } from '@storybook/addon-knobs';

import PegaUidPageCaseWidget from './index.jsx';

import { configProps, operatorDetails } from './mock.stories';

export default {
  title: 'PegaUidPageCaseWidget',
  decorators: [withKnobs],
  component: PegaUidPageCaseWidget
};

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: value => {
      return value;
    }
  };
};

window.PCore.getUserApi = () => {
  return {
    getOperatorDetails: () => {
      return new Promise(resolve => {
        resolve(operatorDetails);
      });
    }
  };
};

export const basePegaUidPageCaseWidget = () => {

  const props = {
    label: configProps.label,
    createLabel: configProps.createLabel,
    updateLabel: configProps.updateLabel,
    createOperator: configProps.createOperator,
    updateOperator: configProps.updateOperator,
    createDateTime: configProps.createDateTime,
    updateDateTime: configProps.updateDateTime,
    hideLabel: configProps.hideLabel,

    getPConnect: () => {
      return {
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
      <PegaUidPageCaseWidget {...props} />
    </>
  );
};
