import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  padding: 8px;
  margin-bottom: 10px;

  border-radius: 5px;

  background-color: ${COLORS.NEUTRAL};

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 550px;

    padding: 0px 20px 0px 10px;

    transition: height 0.2s;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 550px;
    max-height: 55px;

    padding: 5px 20px 5px 10px;

    transition: max-height 0.3s;
  }

  .expanded {
    max-height: 300px;
  }

  .extra_info {
    width: 100%;

    margin-top: 10px;
    padding: 10px 5px 0 5px;

    border-top: 1px solid ${COLORS.GRAY};
  }
`;
