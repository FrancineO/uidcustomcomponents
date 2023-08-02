/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PegaUidTwoColumnForm from './index.jsx';
import { DateInput, Input, FieldValueList, Text } from '@pega/cosmos-react-core';
import { PhoneInput as CosmosPhone } from '@pega/cosmos-react-core';
import { pyReviewRaw, regionChildrenResolved } from './mock.stories';

export default {
  title: 'PegaUidTwoColumnForm',
  decorators: [withKnobs],
  component: PegaUidTwoColumnForm
};

const renderField = resolvedProps => {
  const { displayMode, value = '', label = '', key } = resolvedProps;

  const [inputValue, setInputValue] = useState(value);
  const [phoneValue, setPhoneValue] = useState('+16397975093');


  const variant = displayMode === 'LABELS_LEFT' ? 'inline' : 'stacked';

  let val =
    value !== '' ? (
      <Text
        variant='h1'
        as='span'
        key={key}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      >
        {inputValue}
      </Text>
    ) : (
      ''
    );


  if (label === 'Service Date')
    val = (
      <DateInput
        value={inputValue}
        style={{ fontSize: '14px' }}
        key={key}
        onChange={dateVal => {
          const { valueAsISOString: date } = dateVal;
          const trimmedDate = date ? date.substring(0, date.indexOf('T')) : date;
          setInputValue(trimmedDate);
        }}
      ></DateInput>
    );

  if (label === 'Email')
    val = (
      <Input
        type='email'
        value={inputValue}
        style={{ fontSize: '14px' }}
        key={key}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      ></Input>
    );

  if (label === 'First Name' || label === 'Last Name' || label === 'Middle Name')
    val = (
      <Input
        value={inputValue}
        style={{ fontSize: '14px' }}
        key={key}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      ></Input>
    );

  if (label === 'Phone Number')
    val = (
      <CosmosPhone
        value={phoneValue}
        showCountryCode
        style={{ fontSize: '14px' }}
        key={key}
        onChange={phoneVal => {
          setPhoneValue(phoneVal);
        }}
      ></CosmosPhone>
    );


  if (variant === 'inline') {
    val = value || (
      <span
        aria-hidden='true'
        key={key}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      >
        &ndash;&ndash;
      </span>
    );
  } else {
    val = (
      <Text
        variant='h1'
        as='span'
        key={key}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      >
        {val}
      </Text>
    );
  }
  return (
    <FieldValueList
      variant={variant}
      fields={[{ name: label, value: val }]}
      key={key}
      onChange={() => {
        /* nothing */
      }}
    />
  );
};

export const basePegaUidTwoColumnForm = () => {
  const props = {
    template: 'DefaultForm',
    getPConnect: () => {
      return {
        getChildren: () => {
          return pyReviewRaw.children;
        },
        createComponent: config => {
          // eslint-disable-next-line default-case
          switch (config.config.value) {
            case '@P .FirstName':
              return renderField(regionChildrenResolved[0]);
            case '@P .MiddleName':
              return renderField(regionChildrenResolved[1]);
            case '@P .LastName':
              return renderField(regionChildrenResolved[2]);
            case '@P .Email':
              return renderField(regionChildrenResolved[3]);
            case '@P .PhoneNumber':
              return renderField(regionChildrenResolved[4]);
            case '@P .ServiceDate':
              return renderField(regionChildrenResolved[5]);
          }
        }
      };
    }
  };

  const regionAChildren = pyReviewRaw.children[0].children.map(child => {
    return props.getPConnect().createComponent(child);
  });
  const regionBChildren = pyReviewRaw.children[1].children.map(child => {
    return props.getPConnect().createComponent(child);
  });

  return (
    <PegaUidTwoColumnForm {...props}>
      {regionAChildren}
      {regionBChildren}
    </PegaUidTwoColumnForm>
  );
};
