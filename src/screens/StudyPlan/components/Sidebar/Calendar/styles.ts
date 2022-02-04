import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .calendar {
    width: 250px;

    .react-calendar {
      max-width: 100%;
      background: red;
      border: 1px solid #a0a096;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.125em;
    }

    .react-calendar button {
      margin: 0;
      border: 0;
      outline: none;
    }

    .react-calendar__navigation button {
      min-width: 44px;
      background: none;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: red;
    }
    .react-calendar__navigation button[disabled] {
      background-color: red;
    }
    .react-calendar__month-view__weekdays {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75em;
    }

    /* Textos */
    .react-calendar__month-view__weekdays__weekday {
      color: ${COLORS.TEXT};
      padding: 5px 0;
      * {
        text-decoration: none;
      }
    }

    /* Cor dos dias nos fins de semana */
    .react-calendar__month-view__days__day--weekend {
      color: red;
    }
    /* Cor dos dias de outros meses */
    .react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
    }

    /* Botão dos dias */
    .react-calendar__tile {
      text-align: center;
      max-width: 100%;
      padding: 3px;
      border: none;
      border-radius: 5px;
      background: none;
    }

    /* Cor dos quadrados em foco/hover */
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: #e6e6e620;
    }

    /* dia ativo */
    .react-calendar__tile--active {
      background: ${COLORS.PRIMARY};
      color: white;
    }

    /* hover e focus do dia ativo */
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: ${COLORS.PRIMARY};
    }

    .react-calendar--selectRange .react-calendar__tile--hover {
      background-color: #e6e6e6;
    }
  }
`;
