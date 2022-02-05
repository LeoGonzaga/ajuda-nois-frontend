import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 260px;
  padding: 16px;

  border-radius: 100%;

  background-image: linear-gradient(#23232c, #23232c),
    radial-gradient(circle at top, #ffd054, #26221a);
  background-origin: border-box;
  background-clip: content-box, border-box;

  clip-path: circle(131px);

  position: relative;

  /* Inverter o slider */
  .flip {
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
    border-radius: 100%;
    position: absolute;
  }

  .flip + p {
    position: absolute;
  }
`;
