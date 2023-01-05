import styled, { css } from 'styled-components';
import { useTheme } from '@pega/cosmos-react-core/lib/hooks';
import { merge } from 'lodash';

let PCore;
const StyledMemberCard = styled.div(() => {
  const defaultTheme = useTheme();
  const theme = PCore ? merge(defaultTheme, PCore.getEnvironmentInfo().getTheme()) : defaultTheme;
  return css`
    .card {
      width: 450px;
      height: 250px;
      box-shadow: ${theme.base.shadow.low};
      border-radius: ${theme.base['border-radius']};
      overflow: hidden;
      position: relative;
      margin: 1.5rem;
    }

    .user-card {
      height: 100%;
    }

    .avatar {
      margin-left: 50px;
    }

    .card .additional {
      position: absolute;
      width: 33%;
      height: 100%;
      background: ${theme.base.palette['brand-primary']};
      transition: width ${theme.base.animation.speed};
      overflow: hidden;
      z-index: 2;
    }

    .card .additional.warn {
      background: ${theme.base.palette.warn};
    }

    .card:hover .additional {
      width: 100%;
      border-radius: ${theme.base['border-radius']};
    }

    .card .additional .more-info {
      width: 300px;
      float: left;
      position: absolute;
      left: 150px;
      height: 100%;
      color: ${theme.base.colors.white};
      padding-top: 3rem;
    }

    .card .general {
      width: 300px;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 1;
      box-sizing: border-box;
      padding-top: 3rem;
    }
  `;
});
export default StyledMemberCard;
