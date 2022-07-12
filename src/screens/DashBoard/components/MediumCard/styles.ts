import { COLORS } from '@themes/colors';
import styled from 'styled-components';

type Props = {
  color: string;
  type?: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};

  @media (min-width: 425px) and (max-width: 1023px) {
    max-width: 175px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 100%;
  }
`;

export const Focus = styled.p<Props>`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.color};

  svg {
    font-size: 38px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    font-size: 20px;

    svg {
      font-size: 30px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Subtext = styled.p`
  margin-top: 3px;
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.TEXT};

  @media (min-width: 425px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
