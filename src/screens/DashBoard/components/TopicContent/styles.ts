import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  border-radius: 5px;
  background-color: ${COLORS.NEUTRAL};

  .react-slideshow-container {
    max-width: 940px;
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

  @media (min-width: 425px) and (max-width: 1023px) {
    overflow: hidden;

    .react-slideshow-container {
      max-width: 325px;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    .react-slideshow-container {
      max-width: 600px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 940px;
  height: 100%;

  .each-slide {
    margin-right: 20px;
    padding-bottom: 30px;
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

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 400px;
    height: 230px;
    padding: 0;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    width: 60%;
  }
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

  @media (min-width: 425px) and (max-width: 1023px) {
    text-align: center;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    text-align: center;
  }
`;
