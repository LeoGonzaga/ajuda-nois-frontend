import styled from 'styled-components';

type Props = {
  type?: string;
  expanded?: boolean;
  size?: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: ${(props) => (props.type == 'admin' ? '20px' : '11px')};
  max-height: ${(props) =>
    props.expanded ? props.size : props.type == 'admin' ? '80px' : '60px'};

  border-radius: 5px;

  background-color: ${(props) =>
    props.type == 'admin' ? '#2D2D35' : 'transparent'};

  overflow-y: hidden;

  transition: max-height 0.3s ease;
`;

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${(props) => (props.type == 'admin' ? '0' : '11px')};

  border-radius: 5px;

  background-color: ${(props) =>
    props.type == 'teacher' ? '#2D2D35' : 'transparent'};

  cursor: pointer;

  p {
    color: ${(props) =>
      props.type == 'admin'
        ? '#CED4DA'
        : props.expanded
        ? '#827AFD'
        : '#CED4DA'};

    transition: color 0.3s ease;
  }

  svg {
    color: ${(props) =>
      props.type == 'admin'
        ? '#B4B4B4'
        : props.expanded
        ? '#827AFD'
        : '#B4B4B4'};

    transform: ${(props) => (props.expanded ? 'rotate(-90deg)' : '')};

    filter: brightness(0.5);

    transition: all 0.3s ease;
  }

  &:hover {
    p {
      color: ${(props) => (props.type == 'admin' ? '#CED4DA' : '#827AFD')};
    }

    svg {
      color: ${(props) => (props.type == 'admin' ? '#B4B4B4' : '#827AFD')};

      filter: brightness(0.8);
    }
  }
`;
