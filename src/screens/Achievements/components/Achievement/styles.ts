import styled from 'styled-components';

type Props = {
  achieved: boolean;
};

export const Container = styled.div<Props>`
  opacity: ${(props) => (props.achieved ? 1 : 0.2)};
  margin-bottom: 30px;
  margin-left: 30px;
  background-size: cover;

  div {
    div {
      div + p {
        max-width: 300px;
      }
    }
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    margin-bottom: 30px;
    margin-left: 0px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    div {
      div {
        div + p {
          max-width: 600px;
          font-size: 16px;
        }
      }
    }
  }
`;

export const NoHeightFlex = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 425px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    p:first-child {
      font-size: 19px;
    }
    p:last-child {
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    align-items: center;
    p:first-child {
      font-size: 30px;
    }
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  min-height: 100px;

  padding: 8px;

  margin-right: 10px;

  padding: 6px;
  border-radius: 50%;

  img {
    width: 100px;
    height: 100px;
  }

  background-image: ${(props) =>
      props.achieved
        ? 'linear-gradient(#23232c, #23232c)'
        : 'linear-gradient(#7B693D, #7B693D)'},
    radial-gradient(circle at top left, #ffd054, #37332b);
  background-origin: border-box;
  background-clip: content-box, border-box;

  img {
    max-width: 120px;
  }
  background-color: blue;

  @media (min-width: 425px) and (max-width: 1023px) {
    min-width: 100px;
    min-height: 100px;

    img {
      width: 65px;
      height: 65px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
    min-width: 100px;
    min-height: 100px;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;
