import styled from 'styled-components';

import { Limits } from '../../styles/global';

export const Container = styled.section`
  columns: 2;
  margin-top: ${({ theme }) => theme.spaces['6xl']};
  padding-bottom: ${({ theme }) => theme.spaces['6xl']};
  ${Limits}
  h2 {
    margin-bottom: ${({ theme }) => theme.spaces.lg};
  }
`;

export const Content = styled.div`
  p {
    line-height: 140%;
    font-size: ${({ theme }) => theme.sizes.lg};
    &.mb {
      margin-bottom: ${({ theme }) => theme.spaces['6xl']};
      font-weight: ${({ theme }) => theme.weights.lg};
    }
  }
`;

export const SideContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;
