import { createGlobalStyle } from 'styled-components';
import { type themeDefinition } from '@pega/cosmos-react-core';

const GlobalStyles = createGlobalStyle<{ theme: typeof themeDefinition }>`
 :root {
  --fc-button-active-bg-color: ${props => props.theme.base.palette['brand-primary']};
  --fc-button-active-border-color: ${props => props.theme.base.palette['brand-primary']};
  --fc-button-bg-color: ${props => props.theme.base.palette['primary-background']};
  --fc-button-border-color: ${props => props.theme.base.palette['brand-primary']};
  --fc-button-hover-bg-color: ${props => props.theme.base.palette['brand-primary']};
  --fc-button-hover-border-color: ${props => props.theme.base.palette['brand-primary']};
}`;

export default GlobalStyles;
