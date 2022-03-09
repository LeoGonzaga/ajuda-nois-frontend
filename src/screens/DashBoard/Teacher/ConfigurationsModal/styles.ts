import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  color: ${COLORS.TEXT};
  font-weight: bold;
`;

export const ModalLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-bottom: 5px;

  border-bottom: 1px solid ${COLORS.GRAY};

  span {
    margin-left: 5px;
  }

  svg {
    margin-right: 5px;

    font-size: 24px;

    cursor: pointer;
    filter: brightness(0.6);

    transition: all 0.3s ease;

    &:hover {
      filter: brightness(1);
    }
  }
`;
