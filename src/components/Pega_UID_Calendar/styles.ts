import styled, { css } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
// html {
// --fc-button-active-bg-color: red !important; //${theme.base.palette['brand-primary']};
// }`;
import { type themeDefinition } from '@pega/cosmos-react-core';

export default styled.div(({ theme }: { theme: typeof themeDefinition }): any => {
  return css`
    .fc-event {
      cursor: pointer;
    }
    // Custom button styles
    .fc .fc-button {
      border-radius: ${theme.components.button['border-radius']}px;
      color: ${theme.base.palette['brand-primary']};
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }
    .fc .fc-button-primary:hover {
      color: ${theme.base.palette['primary-background']};
    }
    .fc .fc-button-primary:disabled {
      opacity: 0.4;
    }

    // Custom event styles
    .event-label {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .event-content .event-subject {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: -webkit-fill-available;
      line-height: normal;
      font-size: max(0.6rem, 8px);
    }

    .event-popover .event-subject {
      width: max-content;
    }

    .event-popover .event-indicator {
      height: 15px;
      width: 15px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }

    .event-popover hr.solid {
      border-top: 0 solid ${theme.base.colors.gray.light};
    }
    .event-popover .icon {
      fill: ${theme.base.colors.gray.dark};
    }
  `;
});
