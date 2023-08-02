import { withKnobs } from '@storybook/addon-knobs';

import PegaUidPageWidget from './index.jsx';


import configProps from './mock.stories';

export default {
  title: 'PegaUidPageWidget',
  decorators: [withKnobs],
  component: PegaUidPageWidget
};

export const basePegaUidPageWidget = () => {

  const props = {
    label: configProps.label,
    header: configProps.header,
    description: configProps.description,
    image: configProps.image,
    datasource: configProps.datasource,
    whatsnewlink: configProps.whatsnewlink
};

return (
    <>
      <PegaUidPageWidget {...props} />
    </>
  );
};
