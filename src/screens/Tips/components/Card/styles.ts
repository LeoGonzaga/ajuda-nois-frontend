import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(130, 122, 253);
  background: ${COLORS.PRIMARY};
  padding: 20px;
  width: 300px;
  height: 250px;
  overflow: hidden;
  margin: 10px;
  border-radius: 5px;
  overflow-y: scroll;
`;
