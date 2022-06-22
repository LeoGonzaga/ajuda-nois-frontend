import styled from 'styled-components';

type Props = {
  achieved: boolean;
};

export const Container = styled.div<Props>`
  opacity: ${(props) => (props.achieved ? 1 : 0.2)};
  margin-bottom: 30px;
  margin-left: 30px;

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

  min-width: 120px;
  min-height: 120px;

  margin-right: 10px;

  padding: 8px;

  border-radius: 50%;

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
`;
