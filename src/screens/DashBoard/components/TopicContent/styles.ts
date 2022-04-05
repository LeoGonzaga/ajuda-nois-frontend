import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};

  .react-slideshow-container {
    max-width: 580px;
    display: flex;
    justify-content: space-between;
  }

  .react-slideshow-wrapper {
    padding: 30px 0;
  }

  .each-slide {
    padding-bottom: 20px;
  }

  .arrow {
    margin-bottom: 10px;

    transform: scaleY(1.5);

    cursor: pointer;

    filter: brightness(0.5);

    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .each-slide {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 35px 0;

  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.BLACK};

  filter: brightness(0.7);
`;
