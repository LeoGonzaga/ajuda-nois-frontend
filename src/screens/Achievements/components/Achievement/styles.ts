import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  achieved: boolean;
};

export const Container = styled.div<Props>`
  opacity: ${(props) => (props.achieved ? 1 : 0.2)};
  margin-bottom: 30px;

  div {
    div {
      div + p {
        max-width: 300px;
      }
    }
  }
`;

export const NoHeightFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 80px;
  min-height: 80px;

  background-color: ${(props) =>
    props.achieved ? COLORS.TERTIARY : '#7B693D'};
  position: relative;
  border-radius: 100%;
  margin-right: 10px;

  &::before {
    border-radius: 100%;
    content: '';
    background-color: ${COLORS.QUATERNARY};
    background-image: ${(props) =>
      props.achieved
        ? 'linear-gradient(160deg, #ffc13a 0%, #37332b 90%);'
        : ''};
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    position: absolute;
    z-index: -1;
  }

  img {
    max-width: 50px;
    max-height: 50px;
  }
`;
