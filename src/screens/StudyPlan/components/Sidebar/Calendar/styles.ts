import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .DayPicker-wrapper {
    position: relative;

    flex-direction: row;
    padding-bottom: 8px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    margin: 0;
    margin-top: 8px;
    border-spacing: 0;
    border-collapse: collapse;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-Caption {
    display: none;
    text-align: left;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1em;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    text-align: center;

    padding: 6px;

    color: #8b9898;
    font-size: 14px;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    text-align: center;
    vertical-align: middle;

    padding: 5px;

    border-radius: 10%;

    cursor: pointer;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${COLORS.GRAY};
    }
  }

  .DayPicker-Day--today {
    color: ${COLORS.PRIMARY};
    font-weight: 700;
  }

  .DayPicker-Day--outside {
    color: #8b9898;
    cursor: default;
  }
`;
