import { withKnobs } from '@storybook/addon-knobs';
import { Text, FieldValueList, Button, DateTimeDisplay, useTheme } from '@pega/cosmos-react-core';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fragment, ReactElement } from 'react';

import PegaUidAdvancedForm from './index.jsx';
import type { AdvancedFormProps } from './types';

const defaultProps = {
  getPConnect: () => {
    return {
      getConfigProps: () => ({
        listType: null
      }),
      getActionsApi: () => ({
        openLocalAction: () => ({
          localAction: 'testing',
          type: 'express',
          modalHeader: 'testingvalue',
          label: 'testing popup'
        })
      }),
      getStateProps: () => ({
        alignment: 'center',
        children: [{ child1: 'child1', child2: 'child2', child3: 'child3' }]
      }),
      getDataObject: () => {},
      getComponent: () => {},
      getChildren: () => {
        return [
          {
            props: {
              getPConnect: () => {
                return {
                  getComponent: () => ({
                    text: 'First child'
                  }),
                  getChildren: () => {
                    return [
                      {
                        getPConnect: () => ({
                          getComponent: () => {
                            return <div className='child'>Element 1</div>;
                          },
                          setInheritedProp: () => {}
                        })
                      },
                      {
                        getPConnect: () => ({
                          getComponent: () => {
                            return <div className='child'>Element 2</div>;
                          },
                          setInheritedProp: () => {}
                        })
                      },
                      {
                        getPConnect: () => ({
                          getComponent: () => {
                            return <div className='child'>Element 3</div>;
                          },
                          setInheritedProp: () => {}
                        })
                      },
                      {
                        getPConnect: () => ({
                          getComponent: () => {
                            return <div className='child'>Element 4</div>;
                          },
                          setInheritedProp: () => {}
                        })
                      }
                    ];
                  },
                  setInheritedProp: () => {}
                };
              }
            }
          }
        ];
      },
      getRawMetadata: () => {
        return {
          children: [{ type: 'type' }]
        };
      }
    };
  }
};

export default {
  title: 'PegaUidAdvancedForm',
  decorators: [withKnobs],
  component: PegaUidAdvancedForm,
  args: {
    //children: [], //defaultProps.getPConnect().getChildren(),
    getPConnect: defaultProps.getPConnect,
    displayStatus: false,
    statusField: 'Status field value',
    primaryHeaderType: 'text',
    primaryHeaderText: 'Primary Header text',
    primaryHeaderField: 'Primary header field value',
    primaryVariant: 'h1',
    secondaryHeaderType: 'text',
    secondaryHeaderText: 'SecondaryHeadlineText',
    secondaryHeaderField: 'Secondary header field value',
    mainFormAction: 'collapsibleMode',
    buttonVariant: 'simple',
    buttonLabel: 'Edit',
    hideContent: false,
    defaultCollapsibleBehavior: 'Expanded',
    numberOfColumns: 'One'
  },
  argTypes: {
    primaryHeaderType: {
      options: ['text', 'property'],
      control: { type: 'radio' }
    },
    primaryVariant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph', 'bold'],
      control: { type: 'select' }
    },
    secondaryHeaderType: {
      options: ['text', 'property'],
      control: { type: 'radio' }
    },
    mainFormAction: {
      options: ['none', 'buttonMode', 'collapsibleMode'],
      control: { type: 'select' }
    },
    buttonVariant: {
      options: ['simple', 'primary', 'secondary', 'link'],
      control: { type: 'select' }
    },
    defaultCollapsibleBehavior: {
      options: ['Expanded', 'Collapsed'],
      control: { type: 'radio' }
    },
    numberOfColumns: {
      options: ['One', 'Two', 'Three'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof PegaUidAdvancedForm>;

function Region(props: { getPConnect: Function }) {
  const { getPConnect } = props;
  return <>{getPConnect}</>;
}

const Template: ComponentStory<typeof PegaUidAdvancedForm> = (args: AdvancedFormProps) => {
  const children = defaultProps.getPConnect().getChildren()[0]; //.props; //.getPConnect().getChildren();

  // const regionAChildren = children.map(child => {
  //   return child;
  // });
  return (
    <PegaUidAdvancedForm {...args}>
      <Region getPConnect={children.props.getPConnect}></Region>
      <>{}</>
    </PegaUidAdvancedForm>
  );
};

export const DefaultAdvancedForm = Template.bind({});
DefaultAdvancedForm.args = { ...Template.args };

export const OneColumn = Template.bind({});
OneColumn.args = { ...Template.args, numberOfColumns: 'One' };

export const TwoColumns = Template.bind({});
TwoColumns.args = { ...Template.args, numberOfColumns: 'Two' };

export const ThreeColumns = Template.bind({});
ThreeColumns.args = { ...Template.args, numberOfColumns: 'Three' };

export const OneColumnSuccessStatus = Template.bind({});
OneColumnSuccessStatus.args = {
  ...Template.args,
  numberOfColumns: 'One',
  displayStatus: true,
  statusField: 'hello'
};

export const OneColumnWarningStatus = Template.bind({});
OneColumnWarningStatus.args = {
  ...Template.args,
  numberOfColumns: 'One',
  displayStatus: true,
  statusField: null
};
