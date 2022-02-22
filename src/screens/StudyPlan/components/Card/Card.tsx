import React, { useState } from 'react';

import Spacing from '@components/Spacing';

import Buttons from './Buttons';
import Description from './Description';
import StatusIcon from './StatusIcon';
import {
  Container,
  ExpandableContent,
  HideableContent,
  Wrapper,
} from './styles';
import Subject from './Subject';
import Times from './Times';

type Props = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text: string;
};

export const Card: React.FC<Props> = ({
  status,
  startTime,
  endTime,
  subject,
  topic,
  text,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({
    currentState: status,
    previousState: '',
  });

  const handleState = (state: string) => {
    setState((prevState) => {
      return {
        currentState: state,
        previousState: prevState.currentState,
      };
    });
  };

  return (
    <Container status={state.currentState}>
      <StatusIcon status={state.currentState} />
      <ExpandableContent expanded={expanded}>
        <Wrapper onClick={() => setExpanded(!expanded)}>
          <Times startTime={startTime} endTime={endTime} />
          <Spacing vertical={3} />
          <Subject subject={subject} topic={topic} />
        </Wrapper>
        <HideableContent>
          <Description text={text} onClick={() => setExpanded(!expanded)} />
          <Buttons
            status={state.currentState}
            prevStatus={state.previousState}
            onHandleClick={handleState}
          />
        </HideableContent>
      </ExpandableContent>
    </Container>
  );
};
