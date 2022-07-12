import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: flex-start;
  overflow-y: auto;
  height: 90vh;
`;

type Props = {
  background: string;
};

export const SubjectCards = styled.button`
  width: 190px;
  height: 250px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.NEUTRAL};
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.2ms ease;

  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 150px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;

export const Circle = styled.div<Props>`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 5px solid #fff;
  background-color: ${(props) => props.background};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 425px) and (max-width: 1023px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1024px) and (max-width: 1329px) {
  }
`;
