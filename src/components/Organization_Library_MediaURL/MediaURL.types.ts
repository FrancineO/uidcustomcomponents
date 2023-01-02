import type { FormControlProps, OmitStrict, URLDisplayProps } from '@pega/cosmos-react-core';

export interface MediaURLInputProps extends OmitStrict<FormControlProps, 'defaultValue'> {
  testId?: string;
}

export interface MediaURLDisplayProps extends OmitStrict<URLDisplayProps, 'variant' | 'ref'> {
  variant?: 'player' | URLDisplayProps['variant'];
  testId?: string;
}
