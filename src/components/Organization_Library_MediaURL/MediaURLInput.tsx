import { ChangeEvent, FunctionComponent, useState } from 'react';
import { Input } from '@pega/cosmos-react-core';

import type { MediaURLInputProps } from './MediaURL.types';

const MediaURLInput: FunctionComponent<MediaURLInputProps> = ({
  value,
  ...restProps
}: MediaURLInputProps) => {
  const [url, setURL] = useState(value);

  return (
    <Input
      {...restProps}
      type='url'
      value={url}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setURL(e.target.value);
      }}
    />
  );
};

export default MediaURLInput;
