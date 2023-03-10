import type { ReactNode } from 'react';

export interface AdvancedFormProps {
  getPConnect: CallableFunction;
  displayStatus: boolean;
  statusField?: string;
  primaryHeaderType: string;
  primaryHeaderText?: string;
  primaryHeaderField?: string;
  primaryVariant: string;
  secondaryHeaderType?: string;
  secondaryHeaderText?: string;
  secondaryHeaderField?: string;
  mainFormAction: string;
  localAction?: string;
  localActionType?: string;
  modalHeader?: string;
  buttonVariant?: string;
  buttonLabel?: string;
  hideContent?: boolean;
  defaultCollapsibleBehavior?: string;
  numberOfColumns?: string;
  children?: ReactNode[];
}
