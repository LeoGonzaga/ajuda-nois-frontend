import styled from 'styled-components';

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 45px;
  width: 100%;
  background: rgb(0, 191, 32);
  background: linear-gradient(
    90deg,
    rgba(0, 191, 32, 1) 0%,
    rgba(43, 224, 74, 1) 77%
  );
  background-size: 400% 400%;
  margin-top: 10px;
  animation: pulse 1.2s ease infinite;
  border-radius: 5px;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -105% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 10px;
  &::before {
    content: '\00a0';
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Styles = {
  Container,
  SSkeletonLine,
};
